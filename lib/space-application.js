import { contact } from './data';
import { vatika } from './vatika';

/** Plants Donation — space offer application (applicant provides land; campaign supplies plants). */
export const spaceApplication = {
  title: 'Space Offer Application',
  subjectLine: 'Offering Space for Plantation under the Plants Donation Initiative',
  toLabel: 'The Plants Donation Team',
  organization: vatika.name,
  lead:
    'Have land or campus space for trees? Offer your location through this application. You provide the space and permission; we provide plants and support the plantation process.',
  howItWorks: [
    {
      title: 'You offer space',
      body: 'Share suitable locations where donated saplings can be planted and maintained.',
    },
    {
      title: 'We provide plants',
      body: 'Under the Plants Donation Initiative, the campaign supplies plants and guides plantation steps.',
    },
    {
      title: 'Joint stewardship',
      body: 'You grant permission and cooperation on site; we coordinate planting with your team.',
    },
  ],
  recipientEmail: contact.email,
  recipientEmailAlt: contact.emailSecondary || 'contact@bkswbengal.org',
  whatsappUrl: contact.whatsappUrl,
  printPath: '/apply/print',
  downloadPath: '/forms/space-plantation-application.txt',
};

export const spaceApplicationFields = [
  { id: 'applicantName', label: 'Full name', type: 'text', required: true, placeholder: 'Your full name' },
  { id: 'organizationName', label: 'Organisation name', type: 'text', required: true, placeholder: 'School, society, company, trust…' },
  {
    id: 'numberOfLocations',
    label: 'Number of available locations',
    type: 'number',
    required: true,
    placeholder: 'e.g. 2',
    min: 1,
  },
  {
    id: 'locations',
    label: 'Location(s)',
    type: 'textarea',
    required: true,
    placeholder: 'Address / landmark for each plot (one per line if multiple)',
  },
  {
    id: 'approximateArea',
    label: 'Approximate area',
    type: 'text',
    required: true,
    placeholder: 'e.g. 0.5 acre / 2000 sq ft',
  },
  {
    id: 'plantationCapacity',
    label: 'Approximate plantation capacity',
    type: 'text',
    required: true,
    placeholder: 'e.g. 50–100 saplings',
  },
  { id: 'mobile', label: 'Mobile', type: 'tel', required: true, placeholder: '10-digit mobile' },
  { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'name@example.com' },
  {
    id: 'applicationDate',
    label: 'Date',
    type: 'date',
    required: true,
  },
  {
    id: 'notes',
    label: 'Additional notes (optional)',
    type: 'textarea',
    required: false,
    placeholder: 'Access hours, water availability, fencing, contact person on site…',
  },
];

export function emptySpaceApplication() {
  const today = new Date().toISOString().slice(0, 10);
  return {
    applicantName: '',
    organizationName: '',
    numberOfLocations: '',
    locations: '',
    approximateArea: '',
    plantationCapacity: '',
    mobile: '',
    email: '',
    applicationDate: today,
    notes: '',
    permissionConsent: false,
    photoAck: false,
  };
}

export function validateSpaceApplication(data) {
  const errors = {};
  for (const field of spaceApplicationFields) {
    if (!field.required) continue;
    const value = String(data[field.id] ?? '').trim();
    if (!value) errors[field.id] = 'Required';
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email).trim())) {
    errors.email = 'Enter a valid email';
  }
  const mobile = String(data.mobile || '').replace(/\D/g, '');
  if (data.mobile && mobile.length < 10) {
    errors.mobile = 'Enter a valid mobile number';
  }
  if (data.numberOfLocations && Number(data.numberOfLocations) < 1) {
    errors.numberOfLocations = 'Must be at least 1';
  }
  if (!data.permissionConsent) {
    errors.permissionConsent = 'Permission confirmation is required';
  }
  if (!data.photoAck) {
    errors.photoAck = 'Please confirm you will send space photographs';
  }
  return {
    ok: Object.keys(errors).length === 0,
    errors,
  };
}

/** Formal letter body matching the Plants Donation application format. */
export function buildSpaceApplicationLetter(data) {
  const org = data.organizationName || '________________';
  const name = data.applicantName || '________________';
  const lines = [
    `To,`,
    `The Plants Donation Team`,
    `${spaceApplication.organization}`,
    ``,
    `Subject: ${spaceApplication.subjectLine}`,
    ``,
    `Dear Sir/Madam,`,
    ``,
    `I, ${name}, representing ${org}, would like to offer our available spaces for plantation under your Plants Donation Initiative.`,
    ``,
    `We have ${data.numberOfLocations || '______'} suitable location(s)/spaces where donated plants or saplings can be planted and maintained. We are interested in providing these spaces so that individuals or organizations donating plants may utilize them for plantation.`,
    ``,
    `Details of the available space:`,
    `Name: ${name}`,
    `Organization Name: ${org}`,
    `Number of Available Locations: ${data.numberOfLocations || '______'}`,
    `Location(s): ${data.locations || '______'}`,
    `Approximate Area: ${data.approximateArea || '______'}`,
    `Approximate Plantation Capacity: ${data.plantationCapacity || '______'}`,
    ``,
    `I am willing to provide the necessary permission and cooperation for plantation at these locations.`,
    ``,
    `I have attached / will email photographs of the available spaces for your review.`,
    data.notes?.trim() ? `` : null,
    data.notes?.trim() ? `Additional notes: ${data.notes.trim()}` : null,
    ``,
    `Kindly consider our space for the plantation initiative and guide us regarding the next steps.`,
    ``,
    `Sincerely,`,
    `${name}`,
    `Organization: ${org}`,
    `Mobile: ${data.mobile || '______'}`,
    `Email: ${data.email || '______'}`,
    `Date: ${data.applicationDate || '______'}`,
    `Signature: ____________________`,
  ].filter((line) => line !== null);

  return lines.join('\n');
}

export function buildSpaceApplicationMailto(data) {
  const subject = encodeURIComponent(
    `[Space Offer] ${data.organizationName || 'Application'} — ${data.applicantName || 'Applicant'}`
  );
  const body = encodeURIComponent(
    `${buildSpaceApplicationLetter(data)}\n\n---\nSubmitted via ${SITE_REF}\nPlease reply with photographs of the spaces if not already sent.`
  );
  return `mailto:${spaceApplication.recipientEmail}?subject=${subject}&body=${body}`;
}

const SITE_REF = 'https://bks-ky21c-plantation-drive.vercel.app/apply';

export function buildSpaceApplicationFilename(data) {
  const slug = String(data.organizationName || data.applicantName || 'space-offer')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  return `space-plantation-application-${slug || 'draft'}.txt`;
}

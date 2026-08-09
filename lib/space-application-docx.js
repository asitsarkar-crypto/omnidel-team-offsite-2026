/**
 * Word (.docx) generator for Plants Donation space-offer applications.
 * Blank template for offline sign/return; filled copy after online submit.
 */

import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import { spaceApplication } from './space-application';
import { vatika } from './vatika';

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 200 },
    ...opts,
    children: [
      new TextRun({
        text: text || '',
        font: 'Calibri',
        size: opts.size || 22,
        bold: opts.bold || false,
      }),
    ],
  });
}

function blankLine(label) {
  return p(`${label}: _______________________________________________`);
}

function detailRow(label, value) {
  const display = value?.toString().trim() ? value.toString() : '_______________________________';
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 3800, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          left: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          right: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
        },
        children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, font: 'Calibri', size: 20 })] })],
      }),
      new TableCell({
        width: { size: 6200, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          left: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
          right: { style: BorderStyle.SINGLE, size: 4, color: '999999' },
        },
        children: [new Paragraph({ children: [new TextRun({ text: display, font: 'Calibri', size: 20 })] })],
      }),
    ],
  });
}

/**
 * @param {object} [data] - filled application fields; omit / empty for blank template
 * @param {{ publicId?: string }} [meta]
 */
export async function buildSpaceApplicationDocxBuffer(data = {}, meta = {}) {
  const filled = Boolean(
    data.applicantName || data.organizationName || data.locations || data.email
  );
  const name = data.applicantName || '________________';
  const org = data.organizationName || '________________';
  const count = data.numberOfLocations || '______';

  const intro = filled
    ? `I, ${name}, representing ${org}, would like to offer our available spaces for plantation under your Plants Donation Initiative.`
    : 'I, ________________, representing ________________, would like to offer our available spaces for plantation under your Plants Donation Initiative.';

  const countLine = filled
    ? `We have ${count} suitable location(s)/spaces where donated plants or saplings can be planted and maintained. We are interested in providing these spaces so that individuals or organizations donating plants may utilize them for plantation.`
    : 'We have __________ suitable location(s)/spaces where donated plants or saplings can be planted and maintained. We are interested in providing these spaces so that individuals or organizations donating plants may utilize them for plantation.';

  const children = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({ text: vatika.name, bold: true, size: 28, font: 'Calibri' }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: 'Plants Donation Initiative — Space Offer Application',
          bold: true,
          size: 22,
          font: 'Calibri',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 280 },
      children: [
        new TextRun({
          text: 'Joint initiative · KY21C × Bharatiya Krishak Samaj',
          size: 18,
          font: 'Calibri',
          italics: true,
        }),
      ],
    }),
    meta.publicId
      ? p(`Application reference: ${meta.publicId}`, { bold: true, size: 20 })
      : p('Application reference: (assigned on online submit)', { size: 18 }),
    p('To,'),
    p('The Plants Donation Team'),
    p(vatika.name),
    p(`Subject: ${spaceApplication.subjectLine}`, { bold: true }),
    p('Dear Sir/Madam,'),
    p(intro),
    p(countLine),
    new Paragraph({
      spacing: { before: 200, after: 120 },
      children: [
        new TextRun({ text: 'Details of the available space', bold: true, size: 24, font: 'Calibri' }),
      ],
    }),
    new Table({
      width: { size: 10000, type: WidthType.DXA },
      columnWidths: [3800, 6200],
      rows: [
        detailRow('Name', data.applicantName),
        detailRow('Organization Name', data.organizationName),
        detailRow('Number of Available Locations', data.numberOfLocations),
        detailRow('Location(s)', data.locations),
        detailRow('Approximate Area', data.approximateArea),
        detailRow('Approximate Plantation Capacity', data.plantationCapacity),
      ],
    }),
    p(''),
    p(
      'I am willing to provide the necessary permission and cooperation for plantation at these locations.'
    ),
    p('I have attached photographs of the available spaces for your review.'),
    data.notes?.trim() ? p(`Additional notes: ${data.notes.trim()}`) : p('Additional notes: _______________________________________________'),
    p('Kindly consider our space for the plantation initiative and guide us regarding the next steps.'),
    p('Sincerely,'),
    blankLine('Name'),
    blankLine('Organization'),
    blankLine(filled && data.mobile ? `Mobile (${data.mobile})` : 'Mobile'),
    blankLine(filled && data.email ? `Email (${data.email})` : 'Email'),
    blankLine(filled && data.applicationDate ? `Date (${data.applicationDate})` : 'Date'),
    blankLine('Signature'),
    p(''),
    p(
      'Return path: Sign this Word document (or a printed PDF), attach space photographs, and email to reachus@ky21c.org. Online Apply: https://bks-ky21c-plantation-drive.vercel.app/apply',
      { size: 18 }
    ),
  ];

  const doc = new Document({
    creator: vatika.name,
    title: spaceApplication.title,
    description: spaceApplication.subjectLine,
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });

  return Packer.toBuffer(doc);
}

export function spaceApplicationDocxFilename(data = {}, { blank = false } = {}) {
  if (blank) return 'space-plantation-application.docx';
  const slug = String(data.organizationName || data.applicantName || 'space-offer')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  return `space-plantation-application-${slug || 'filled'}.docx`;
}

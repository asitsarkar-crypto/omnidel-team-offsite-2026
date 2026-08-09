import Link from 'next/link';
import PrintButton from '../../../components/apply/PrintButton';
import { contact } from '../../../lib/data';
import { spaceApplication } from '../../../lib/space-application';
import { vatika } from '../../../lib/vatika';
import { buildMetadata, pageSeo } from '../../../lib/seo';

export const metadata = buildMetadata({
  ...pageSeo.apply,
  title: 'Printable Space Offer Application',
  path: '/apply/print',
});

export default function ApplyPrintPage() {
  return (
    <div className="print-form-page">
      <div className="print-toolbar no-print wrap">
        <p>
          Print this page or save as PDF, fill by hand, sign, and send with photographs to{' '}
          <strong>{contact.email}</strong>.
        </p>
        <div className="hero-actions">
          <PrintButton />
          <Link className="btn btn-line dark" href="/apply">
            Back to online Apply
          </Link>
          <a className="btn btn-line dark" href={spaceApplication.downloadPath} download>
            Download .txt
          </a>
        </div>
      </div>

      <article className="print-letter wrap">
        <header className="print-letter-head">
          <p className="print-org">{vatika.name}</p>
          <p className="print-sub">Plants Donation Initiative — Space Offer Application</p>
          <p className="print-meta">Joint initiative · KY21C × Bharatiya Krishak Samaj</p>
        </header>

        <p>To,</p>
        <p>
          The Plants Donation Team
          <br />
          {vatika.name}
        </p>

        <p>
          <strong>Subject:</strong> {spaceApplication.subjectLine}
        </p>

        <p>Dear Sir/Madam,</p>

        <p>
          I, ________________________________, representing ________________________________,
          would like to offer our available spaces for plantation under your Plants Donation Initiative.
        </p>

        <p>
          We have __________ suitable location(s)/spaces where donated plants or saplings can be planted
          and maintained. We are interested in providing these spaces so that individuals or organizations
          donating plants may utilize them for plantation.
        </p>

        <h2 className="print-h">Details of the available space</h2>
        <table className="print-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>_______________________________________________</td>
            </tr>
            <tr>
              <th>Organization Name</th>
              <td>_______________________________________________</td>
            </tr>
            <tr>
              <th>Number of Available Locations</th>
              <td>_______________________________________________</td>
            </tr>
            <tr>
              <th>Location(s)</th>
              <td>
                _______________________________________________
                <br />
                _______________________________________________
                <br />
                _______________________________________________
              </td>
            </tr>
            <tr>
              <th>Approximate Area</th>
              <td>_______________________________________________</td>
            </tr>
            <tr>
              <th>Approximate Plantation Capacity</th>
              <td>_______________________________________________</td>
            </tr>
          </tbody>
        </table>

        <p>
          I am willing to provide the necessary permission and cooperation for plantation at these
          locations.
        </p>

        <p>I have attached photographs of the available spaces for your review.</p>

        <p>
          Kindly consider our space for the plantation initiative and guide us regarding the next steps.
        </p>

        <p>Sincerely,</p>

        <div className="print-sign-block">
          <p>Name: _________________________________</p>
          <p>Organization: __________________________</p>
          <p>Mobile: ________________________________</p>
          <p>Email: _________________________________</p>
          <p>Date: __________________________________</p>
          <p>Signature: ______________________________</p>
        </div>

        <footer className="print-footer">
          <p>
            Submit to: {contact.email} · +91 {contact.phones[0]} · {contact.office}
          </p>
          <p>Online form: https://bks-ky21c-plantation-drive.vercel.app/apply</p>
        </footer>
      </article>
    </div>
  );
}

import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import Reveal from '../../components/Reveal';
import SpaceApplicationForm from '../../components/apply/SpaceApplicationForm';
import { contact } from '../../lib/data';
import { spaceApplication } from '../../lib/space-application';
import { vatika } from '../../lib/vatika';
import { breadcrumbJsonLd, buildMetadata, pageSeo } from '../../lib/seo';

export const metadata = buildMetadata(pageSeo.apply);

export default function ApplyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Apply — Offer Space', path: '/apply' },
        ])}
      />

      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('/photos/activity/field-plough-work.jpg')" }}
        />
        <div className="wrap page-hero-copy">
          <p className="kicker light">Plants Donation Initiative</p>
          <h1>Apply — offer your space for plantation</h1>
          <p className="page-lead">{spaceApplication.lead}</p>
          <div className="hero-actions" style={{ marginTop: 18 }}>
            <a className="btn btn-solid" href="#apply-form">
              Fill online application
            </a>
            <a className="btn btn-line" href={spaceApplication.wordPath}>
              Download Word form
            </a>
            <Link className="btn btn-line" href={spaceApplication.printPath}>
              Print hard copy
            </Link>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="how-title">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">How it works</p>
            <h2 id="how-title">Space from you · plants from us</h2>
            <p className="section-deck">
              Under {vatika.name}, organisations and individuals can offer land or campus plots for the
              Plants Donation Initiative.
            </p>
          </Reveal>
          <div className="joint-grid">
            {spaceApplication.howItWorks.map((step, i) => (
              <Reveal key={step.title} delay={i * 60} className="note-panel">
                <p className="kicker">Step {i + 1}</p>
                <h3>{step.title}</h3>
                <p className="lede soft">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band muted-band" aria-labelledby="hardcopy-title">
        <div className="wrap apply-split">
          <Reveal>
            <p className="kicker">Word + hard copy</p>
            <h2 id="hardcopy-title">Download Word, sign &amp; return by email</h2>
            <p className="section-deck">
              Mahacharyaji’s Apply path: download the official Word application, fill and sign (or print
              a hard copy), then email the signed file with space photographs to our Plants Donation desk.
              Online submit also generates the same Word file and stores the application in the system.
            </p>
            <ul className="apply-send-list">
              <li>
                Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                WhatsApp / Call: <a href={`tel:+91${contact.phones[0]}`}>+91 {contact.phones[0]}</a>
              </li>
              <li>Office: {contact.office}</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <a className="btn btn-solid" href={spaceApplication.wordPath}>
                Download Word (.docx)
              </a>
              <Link className="btn btn-line dark" href={spaceApplication.printPath}>
                Printable form
              </Link>
              <a className="btn btn-line dark" href={spaceApplication.downloadPath} download>
                Download .txt
              </a>
            </div>
          </Reveal>
          <Reveal delay={70} className="note-panel">
            <p className="kicker">System capture</p>
            <h3>{spaceApplication.subjectLine}</h3>
            <p className="lede soft">
              Online applications are saved through the API: <strong>Supabase Postgres database</strong>{' '}
              when credentials + migration are active; otherwise <strong>JSON memory</strong> (same pledge
              mode as donations — not durable across server restarts). The Word document is the signing /
              email-return artifact for desk workflow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band" id="apply-form" aria-labelledby="form-title">
        <div className="wrap plant-layout">
          <Reveal className="plant-aside">
            <p className="kicker">Checklist</p>
            <h2 id="form-title">Before you apply</h2>
            <ul className="package-list">
              <li>
                <strong>Photographs</strong>
                <span>Clear photos of each plot</span>
                <em>Email with your application</em>
              </li>
              <li>
                <strong>Permission</strong>
                <span>Authority to offer the land</span>
                <em>Owner / admin consent</em>
              </li>
              <li>
                <strong>Access</strong>
                <span>Water, fencing, entry if known</span>
                <em>Helps plantation planning</em>
              </li>
            </ul>
            <p className="lede">
              Want to sponsor trees instead?{' '}
              <Link className="text-link" href="/plant">
                Plant a Tree
              </Link>{' '}
              or{' '}
              <Link className="text-link" href="/donate">
                Donate
              </Link>
              .
            </p>
          </Reveal>
          <Reveal>
            <SpaceApplicationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

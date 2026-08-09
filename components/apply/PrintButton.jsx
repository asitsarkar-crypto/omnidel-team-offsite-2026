'use client';

export default function PrintButton({ label = 'Print / Save as PDF' }) {
  return (
    <button className="btn btn-solid" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-intro">
      <span className="eyebrow">404 / UNKNOWN ROUTE</span>
      <h1>Outside the lab.</h1>
      <p>This route does not exist. Return to the working examples.</p>
      <Link className="button primary" href="/">
        Back to examples →
      </Link>
    </div>
  );
}

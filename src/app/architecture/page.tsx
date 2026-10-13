import Link from 'next/link';

export const metadata = { title: 'Architecture' };

export default function Architecture() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">UNDER THE HOOD</span>
        <h1>
          Explicit boundaries.
          <br />
          Predictable behavior.
        </h1>
        <p>
          One project, several rendering models. Each serves a specific purpose.
        </p>
      </div>
      <div className="architecture-flow">
        <span>Browser / Link</span>
        <b>→</b>
        <span>App Router</span>
        <b>→</b>
        <span>Server Components</span>
        <b>→</b>
        <span>Client islands</span>
      </div>
      <div className="lab-grid">
        <section className="demo-box">
          <h2>Rendering</h2>
          <p>
            Known example pages are prerendered. searchParams makes the catalog
            dynamic. connection() separates request-time demos from build-time
            rendering.
          </p>
        </section>
        <section className="demo-box">
          <h2>Data & mutations</h2>
          <p>
            The catalog uses local data. A Route Handler provides the JSON API.
            A Server Action validates FormData. A cached snapshot demonstrates
            TTL and tag revalidation.
          </p>
        </section>
        <section className="demo-box">
          <h2>Routing</h2>
          <p>
            A shared root layout, [slug], loading, error, and not-found
            conventions. Gallery adds a nested layout, an @modal slot, and
            (.)photo/[id] interception.
          </p>
        </section>
        <section className="demo-box">
          <h2>Production scope</h2>
          <p>
            This educational showcase has no database, authentication, payments,
            or external secrets. Forms do not save data. A production product
            needs persistence, rate limits, authentication, and observability.
          </p>
        </section>
      </div>
      <section className="demo-box architecture-code">
        <h2>Project map</h2>
        <pre>{`src/
  app/                   routes, layouts, metadata
    examples/[slug]/      dynamic pages + error boundary
    gallery/@modal/       parallel + intercepting routes
    api/examples/         HTTP endpoint
    actions.ts            validated server functions
  components/             client islands + server demos
  lib/examples.ts         typed catalog
  lib/photos.ts           remote photo URLs and descriptions`}</pre>
        <Link className="button secondary" href="/playground">
          Try the behavior →
        </Link>
      </section>
    </>
  );
}

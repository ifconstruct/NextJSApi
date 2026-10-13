import { Suspense } from 'react';
import { Counter, FeedbackForm, ApiExplorer } from '@/components/playground';
import { CachedClock, SlowPanel } from '@/components/server-demo';

export const metadata = { title: 'Interactive lab' };

export default function Playground() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">INTERACTIVE LAB</span>
        <h1>Touch the architecture.</h1>
        <p>
          Click, submit, and refresh. Turn framework concepts into observable
          behavior.
        </p>
      </div>
      <div className="lab-grid">
        <section>
          <h2>01 / Client state</h2>
          <Counter />
        </section>
        <section>
          <h2>02 / Server Action</h2>
          <FeedbackForm />
        </section>
        <section>
          <h2>03 / HTTP API</h2>
          <ApiExplorer />
        </section>
        <section>
          <h2>04 / Streaming</h2>
          <Suspense
            fallback={
              <div className="demo-box skeleton">
                The server is preparing this block…
              </div>
            }
          >
            <SlowPanel />
          </Suspense>
        </section>
        <section className="wide">
          <h2>05 / Cached server data</h2>
          <Suspense
            fallback={
              <div className="demo-box skeleton">Loading the snapshot…</div>
            }
          >
            <CachedClock />
          </Suspense>
        </section>
      </div>
    </>
  );
}

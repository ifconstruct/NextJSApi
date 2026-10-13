import { examples } from '@/lib/examples';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { photos } from '@/lib/photos';
import { Suspense } from 'react';
import {
  Counter,
  FeedbackForm,
  ApiExplorer,
  ErrorTrigger,
} from '@/components/playground';
import { SlowPanel, CachedClock } from '@/components/server-demo';

export function generateStaticParams() {
  return examples.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const example = examples.find((e) => e.slug === slug);

  return {
    title: example?.title || 'Not found',
    description: example?.description,
  };
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const example = examples.find((e) => e.slug === slug);

  if (!example) notFound();

  const index = examples.findIndex((e) => e.slug === slug);

  return (
    <>
      <Link href="/" className="back-link">
        ← All examples
      </Link>
      <div className="page-intro">
        <span className="eyebrow">
          {example.category.toUpperCase()} / {example.level.toUpperCase()}
        </span>
        <h1>{example.title}</h1>
        <p>{example.description}</p>
        <div className="tags">
          {example.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="detail-grid">
        <section className="demo-box">
          <h2>How it works</h2>
          <p>{example.detail}</p>
          <h3>Source reference</h3>
          <code className="file-path">{example.file}</code>
          <h3>Interview question</h3>
          <p>
            Which code runs on the server, which reaches the browser, and how
            does that affect the user experience?
          </p>
        </section>
        <section>
          {slug === 'client-components' ? (
            <Counter />
          ) : slug === 'server-actions' ? (
            <FeedbackForm />
          ) : slug === 'route-handlers' ? (
            <ApiExplorer />
          ) : slug === 'streaming' ? (
            <Suspense
              fallback={
                <div className="demo-box skeleton">
                  Streaming server content…
                </div>
              }
            >
              <SlowPanel />
            </Suspense>
          ) : slug === 'caching' ? (
            <Suspense
              fallback={<div className="demo-box skeleton">Loading cache…</div>}
            >
              <CachedClock />
            </Suspense>
          ) : slug === 'error-boundaries' ? (
            <div className="demo-box">
              <ErrorTrigger />
              <p>
                <Link href="/examples/unknown">Try a missing route →</Link>
              </p>
            </div>
          ) : slug === 'image-optimization' ? (
            <div className="demo-box">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                width={800}
                height={533}
                sizes="(max-width: 800px) 90vw, 40vw"
                className="demo-image"
              />
            </div>
          ) : slug === 'parallel-routes' ? (
            <div className="demo-box">
              <h3>Navigation with context</h3>
              <Link className="button primary" href="/gallery">
                Open the gallery ↗
              </Link>
            </div>
          ) : slug === 'metadata' ? (
            <div className="demo-box">
              <h3>Metadata routes</h3>
              <p>
                <a href="/sitemap.xml">Open sitemap.xml ↗</a>
              </p>
              <p>
                <a href="/robots.txt">Open robots.txt ↗</a>
              </p>
              <p>Check the page title in your browser tab.</p>
            </div>
          ) : (
            <div className="demo-box">
              <span className="live-pill">● Server-rendered</span>
              <h3>This route demonstrates the concept</h3>
              <p>
                A server-rendered page, dynamic slug, unique metadata, and
                shared layout. Compare direct navigation with Link.
              </p>
              <Link className="button secondary" href="/?category=Routing">
                Explore URL filters →
              </Link>
            </div>
          )}
        </section>
      </div>
      <Link
        className="next-example"
        href={`/examples/${examples[(index + 1) % examples.length].slug}`}
      >
        Next example{' '}
        <strong>{examples[(index + 1) % examples.length].title} →</strong>
      </Link>
    </>
  );
}

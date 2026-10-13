import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Server,
  MousePointer2,
  Route,
  Waves,
  Zap,
  Braces,
  Database,
  Search,
  ImageIcon,
  ShieldCheck,
  Layers,
  Link2,
  Terminal,
  Check,
} from 'lucide-react';
import { examples, categories } from '@/lib/examples';

const icons = {
  server: Server,
  mouse: MousePointer2,
  route: Route,
  waves: Waves,
  bolt: Zap,
  braces: Braces,
  database: Database,
  search: Search,
  image: ImageIcon,
  shield: ShieldCheck,
  layers: Layers,
  link: Link2,
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const params = await searchParams;
  const q = params.q || '';
  const category = categories.includes(params.category || '')
    ? params.category!
    : 'All';
  const filtered = examples.filter(
    (e) =>
      (category === 'All' || e.category === category) &&
      `${e.title} ${e.description} ${e.tags.join(' ')}`
        .toLowerCase()
        .includes(q.toLowerCase()),
  );

  return (
    <>
      <section className="hero">
        <div className="eyebrow">
          <span className="status-dot" /> NEXT.JS FRAMEWORK SHOWCASE{' '}
          <span className="version">v16 / App Router</span>
        </div>
        <h1>
          Explore the framework.
          <br />
          <span>Understand the possibilities.</span>
        </h1>
        <p className="hero-copy">
          A hands-on Next.js playground — from server rendering
          <br className="desktop" /> to advanced routing.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/playground">
            Open the lab <ArrowUpRight size={17} />
          </Link>
          <Link className="button secondary" href="/architecture">
            Project architecture <ArrowRight size={16} />
          </Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cube">
            N<span>↗</span>
          </div>
          <span className="art-tag tag-one">&lt;Server /&gt;</span>
          <span className="art-tag tag-two">use client</span>
          <span className="art-dot" />
        </div>
      </section>
      <section className="stats">
        <div>
          <strong>
            12<span>examples</span>
          </strong>
          <p>Working scenarios</p>
        </div>
        <div>
          <strong>
            4<span>categories</span>
          </strong>
          <p>From UI to server data</p>
        </div>
        <div>
          <strong>
            100%<span>TypeScript</span>
          </strong>
          <p>Strict type checking</p>
        </div>
        <div>
          <strong>
            <Check size={22} />
            <span>Build-ready</span>
          </strong>
          <p>Development and production</p>
        </div>
      </section>
      <section className="catalog">
        <div className="section-heading">
          <div>
            <h2>
              Framework essentials <span>12</span>
            </h2>
            <p>Pick a concept. See how it works.</p>
          </div>
          <span className="small-label">LEARN BY BUILDING ↗</span>
        </div>
        <div className="filters">
          <div className="tabs">
            {categories.map((c) => (
              <Link
                key={c}
                className={category === c ? 'tab selected' : 'tab'}
                href={{
                  pathname: '/',
                  query: {
                    ...(q ? { q } : {}),
                    ...(c !== 'All' ? { category: c } : {}),
                  },
                }}
              >
                {c === 'All' ? 'All examples' : c}
              </Link>
            ))}
          </div>
          <form className="search-form">
            <Search size={16} />
            {category !== 'All' && (
              <input type="hidden" name="category" value={category} />
            )}
            <input
              name="q"
              defaultValue={q}
              placeholder="Find a concept…"
              aria-label="Search examples"
            />
            <button type="submit" aria-label="Search">
              ↵
            </button>
          </form>
        </div>
        <div className="card-grid">
          {filtered.map((e) => {
            const Icon = icons[e.icon];

            return (
              <Link
                key={e.slug}
                href={`/examples/${e.slug}`}
                className="example-card"
              >
                <div className="card-top">
                  <span className={`concept-icon ${e.category.toLowerCase()}`}>
                    <Icon size={21} />
                  </span>
                  <span className="level">{e.level}</span>
                  <ArrowUpRight className="card-arrow" size={18} />
                </div>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                <div className="tags">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="empty">
            No examples found. <Link href="/">Clear filters →</Link>
          </div>
        )}
      </section>
      <section className="bottom-banner">
        <span className="terminal-icon">
          <Terminal size={24} />
        </span>
        <div>
          <h3>Small components. Big possibilities.</h3>
          <p>
            Each example has its own route, explanation, and source reference.
          </p>
        </div>
        <Link href="/architecture">
          Explore architecture <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}

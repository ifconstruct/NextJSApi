'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FlaskConical,
  Images,
  Boxes,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';

export function Nav() {
  const path = usePathname();

  return (
    <aside className="sidebar">
      <Link className="brand" href="/">
        <span className="brand-mark">
          N<span>↗</span>
        </span>
        <span>
          next<span className="brand-light"> / lab</span>
        </span>
      </Link>
      <div className="workspace">
        <span className="workspace-icon">◈</span>
        <div>
          Framework playground<small>Personal engineering project</small>
        </div>
        <span className="status-dot" />
      </div>
      <p className="nav-label">WORKSPACE</p>
      <nav>
        {[
          { href: '/', label: 'Overview', Icon: LayoutDashboard },
          { href: '/playground', label: 'Interactive lab', Icon: FlaskConical },
          { href: '/gallery', label: 'Routing gallery', Icon: Images },
          { href: '/architecture', label: 'Architecture', Icon: Boxes },
        ].map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className={path === href ? 'nav-item active' : 'nav-item'}
          >
            <Icon size={18} />
            {label}
            {href === '/' && <span className="nav-count">12</span>}
          </Link>
        ))}
      </nav>
      <div className="side-card">
        <BookOpen size={20} />
        <strong>Built to be explored.</strong>
        <p>
          Working examples.
          <br />
          Open code. No hidden magic.
        </p>
        <Link href="/architecture">
          Explore the architecture <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="side-footer">
        <span className="status-dot" /> Next.js 16 <span>App Router</span>
      </div>
    </aside>
  );
}

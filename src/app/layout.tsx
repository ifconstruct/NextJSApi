import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'Next / Lab — Framework playground',
    template: '%s · Next / Lab',
  },
  description:
    'Next.js showcase: routing, server components, actions, caching.',
  openGraph: {
    title: 'Next / Lab',
    description: 'Explore the framework. Understand the possibilities.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wallet extensions can inject attributes into <html> before hydration.
    // Limit suppression to this element; descendant mismatches remain visible.
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav />
        <div className="main-shell">
          <header className="topbar">
            <span>
              Workspace <span className="breadcrumb">/ Framework showcase</span>
            </span>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              Next.js docs ↗
            </a>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <span>Designed for curiosity. Built with Next.js.</span>
            <span>TypeScript · React · App Router</span>
          </footer>
        </div>
      </body>
    </html>
  );
}

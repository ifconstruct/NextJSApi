export const examples = [
  {
    slug: 'server-components',
    title: 'Server Components',
    category: 'Rendering',
    level: 'Core',
    icon: 'server',
    description:
      'Fetch data and render on the server. Ship less JavaScript to the browser.',
    detail:
      'App Router uses Server Components by default. This page runs on the server, with interactive features isolated in client components.',
    file: 'src/app/page.tsx',
    tags: ['RSC', 'async / await', 'Server render'],
  },
  {
    slug: 'client-components',
    title: 'Client Components',
    category: 'Rendering',
    level: 'Core',
    icon: 'mouse',
    description: 'Interactive UI, local state, and browser events.',
    detail:
      'The use client directive defines the client module boundary. This counter uses useState and event handlers.',
    file: 'src/components/playground.tsx',
    tags: ['useState', 'Client boundary', 'Events'],
  },
  {
    slug: 'dynamic-routing',
    title: 'Dynamic Routing',
    category: 'Routing',
    level: 'Core',
    icon: 'route',
    description: 'Nested layouts, dynamic segments, and route parameters.',
    detail:
      'The [slug] segment receives params as a Promise. generateStaticParams prerenders known routes. Unknown slugs call notFound().',
    file: 'src/app/examples/[slug]/page.tsx',
    tags: ['[slug]', 'Layouts', 'SSG'],
  },
  {
    slug: 'streaming',
    title: 'Streaming & Suspense',
    category: 'Rendering',
    level: 'Advanced',
    icon: 'waves',
    description:
      'Render the interface immediately. Stream slower data when ready.',
    detail:
      'Suspense shows a fallback while the server block intentionally waits 1.2 seconds. connection() makes this example render at request time.',
    file: 'src/components/server-demo.tsx',
    tags: ['Suspense', 'Streaming', 'loading.tsx'],
  },
  {
    slug: 'server-actions',
    title: 'Server Actions',
    category: 'Data',
    level: 'Advanced',
    icon: 'bolt',
    description:
      'Validate forms on the server without a separate API endpoint.',
    detail:
      'useActionState connects the form to a Server Action. The server validates input, and useFormStatus provides pending feedback. No data is saved.',
    file: 'src/app/actions.ts',
    tags: ['use server', 'Validation', 'Forms'],
  },
  {
    slug: 'route-handlers',
    title: 'Route Handlers',
    category: 'Data',
    level: 'Core',
    icon: 'braces',
    description:
      'An HTTP API with JSON responses, filtering, and status codes.',
    detail:
      'GET /api/examples supports ?q=. The API explorer handles loading, errors, and request timeouts using AbortController.',
    file: 'src/app/api/examples/route.ts',
    tags: ['GET', 'JSON', 'Web Request'],
  },
  {
    slug: 'caching',
    title: 'Caching & Revalidation',
    category: 'Data',
    level: 'Advanced',
    icon: 'database',
    description: 'Cache server data and refresh it by tag.',
    detail:
      'unstable_cache stores a snapshot for 60 seconds. revalidateTag with the max profile uses stale-while-revalidate: the first request may receive the previous snapshot.',
    file: 'src/components/server-demo.tsx',
    tags: ['Cache tags', 'Revalidation', 'SWR'],
  },
  {
    slug: 'metadata',
    title: 'Metadata & SEO',
    category: 'Platform',
    level: 'Core',
    icon: 'search',
    description:
      'Unique page titles, Open Graph metadata, sitemap, and robots.',
    detail:
      'generateMetadata builds page metadata. sitemap.ts and robots.ts generate the corresponding SEO endpoints.',
    file: 'src/app/sitemap.ts',
    tags: ['Metadata API', 'Sitemap', 'Robots'],
  },
  {
    slug: 'image-optimization',
    title: 'Image Optimization',
    category: 'Platform',
    level: 'Core',
    icon: 'image',
    description: 'Responsive images with next/image.',
    detail:
      'width and height reserve layout space; sizes describes the displayed size. This real Unsplash photograph is fetched through an allowlisted host and optimized by next/image for the requested viewport.',
    file: 'src/app/examples/[slug]/page.tsx',
    tags: ['next/image', 'sizes', 'CLS'],
  },
  {
    slug: 'error-boundaries',
    title: 'Error & Not Found',
    category: 'Routing',
    level: 'Advanced',
    icon: 'shield',
    description: 'Recover from rendering errors and handle missing routes.',
    detail:
      'error.tsx catches segment errors and provides reset(). Trigger the intentional demo error or open an unknown route.',
    file: 'src/app/examples/[slug]/error.tsx',
    tags: ['error.tsx', 'reset()', 'notFound'],
  },
  {
    slug: 'parallel-routes',
    title: 'Parallel & Intercepting Routes',
    category: 'Routing',
    level: 'Advanced',
    icon: 'layers',
    description:
      'Open a modal during navigation, or a page from a direct link.',
    detail:
      'Gallery uses @modal/(.)photo/[id]. Soft navigation opens a modal; direct navigation or reload opens a standalone page.',
    file: 'src/app/gallery/@modal/(.)photo/[id]/page.tsx',
    tags: ['@modal', '(.)', 'Soft navigation'],
  },
  {
    slug: 'url-state',
    title: 'URL Search Parameters',
    category: 'Routing',
    level: 'Core',
    icon: 'link',
    description: 'URL-based filters with browser history and shareable links.',
    detail:
      'The catalog reads searchParams on the server. A GET form stores search in the URL. Link preserves parameters and provides client-side navigation.',
    file: 'src/app/page.tsx',
    tags: ['searchParams', 'Link', 'Shareable state'],
  },
] as const;

export const categories = ['All', 'Rendering', 'Routing', 'Data', 'Platform'];

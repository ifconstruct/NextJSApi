import { NextRequest, NextResponse } from 'next/server';
import { examples } from '@/lib/examples';

export function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim().toLowerCase() || '';

  if (q.length > 100)
    return NextResponse.json(
      { error: 'Query must be at most 100 characters' },
      { status: 400 },
    );

  const data = examples.filter((e) =>
    `${e.title} ${e.category} ${e.tags.join(' ')}`.toLowerCase().includes(q),
  );

  return NextResponse.json(
    { count: data.length, data },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

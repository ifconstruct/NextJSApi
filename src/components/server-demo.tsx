import { unstable_cache } from 'next/cache';
import { connection } from 'next/server';
import { refreshClock } from '@/app/actions';

const getClock = unstable_cache(
  async () => ({
    time: new Date().toISOString(),
    id: crypto.randomUUID().slice(0, 8),
  }),
  ['lab-clock'],
  { revalidate: 60, tags: ['lab-clock'] },
);

export async function CachedClock() {
  await connection();
  const snapshot = await getClock();

  return (
    <div className="demo-box">
      <span className="small-label">SERVER CACHE · 60 SEC</span>
      <h3>{snapshot.time}</h3>
      <p>
        Snapshot: <code>{snapshot.id}</code>
      </p>
      <form action={refreshClock}>
        <button className="button secondary">Revalidate tag ↻</button>
      </form>
      <p className="muted">
        SWR may return the previous snapshot on the first request. Refresh again
        to see updated data.
      </p>
    </div>
  );
}

export async function SlowPanel() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return (
    <div className="demo-box">
      <span className="live-pill">● Stream complete</span>
      <h3>Server block is ready</h3>
      <p>
        This block arrived after 1.2 seconds. The rest of the interface was
        available immediately.
      </p>
    </div>
  );
}

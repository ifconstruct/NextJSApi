import Link from 'next/link';
import { PhotoDetail } from '@/components/photo-detail';

export default async function Photo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="standalone-photo">
      <Link className="back-link" href="/gallery">
        ← Gallery
      </Link>
      <PhotoDetail id={id} />
    </div>
  );
}

import { photos } from '@/lib/photos';
import { notFound } from 'next/navigation';
import { PhotoPreview } from '@/components/photo-preview';

export function PhotoDetail({ id }: { id: string }) {
  const photo = photos.find((p) => p.id === id);

  if (!photo) notFound();

  return (
    <>
      <PhotoPreview photo={photo} detail />
      <h2>{photo.title}</h2>
      <p>{photo.subtitle}</p>
      <p className="muted">
        <a href={photo.src} target="_blank" rel="noreferrer">
          View original image on Unsplash ↗
        </a>
      </p>
      <p className="muted">
        URL: /gallery/photo/{id} · Reload this page to see the standalone route.
      </p>
    </>
  );
}

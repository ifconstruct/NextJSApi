import Link from 'next/link';
import { photos } from '@/lib/photos';
import { PhotoPreview } from '@/components/photo-preview';

export const metadata = { title: 'Routing gallery' };

export default function Gallery() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">PARALLEL + INTERCEPTING ROUTES</span>
        <h1>Same URL. Different context.</h1>
        <p>
          Select a card to open a modal. Reload to open the standalone route. Go
          back to close the modal.
        </p>
      </div>
      <div className="card-grid">
        {photos.map((photo) => (
          <Link
            className="gallery-card"
            key={photo.id}
            href={`/gallery/photo/${photo.id}`}
          >
            <PhotoPreview photo={photo} />
            <h3>{photo.title} ↗</h3>
            <p>{photo.subtitle}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

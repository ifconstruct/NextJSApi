import Image from 'next/image';
import { photos } from '@/lib/photos';

export function PhotoPreview({
  photo,
  detail = false,
}: {
  photo: (typeof photos)[number];
  detail?: boolean;
}) {
  return (
    <div
      className={
        detail ? 'photo-preview photo-preview-detail' : 'photo-preview'
      }
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={
          detail
            ? '(max-width: 800px) 90vw, 720px'
            : '(max-width: 600px) 90vw, (max-width: 850px) 40vw, 30vw'
        }
        className="photo-image"
      />
      <span className="photo-category">{photo.category}</span>
    </div>
  );
}

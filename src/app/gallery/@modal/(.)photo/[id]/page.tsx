import { Modal } from '@/components/modal';
import { PhotoDetail } from '@/components/photo-detail';

export default async function InterceptedPhoto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <PhotoDetail id={id} />
    </Modal>
  );
}

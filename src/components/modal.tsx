'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();

    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={ref}
      className="route-modal"
      aria-label="Example details"
      onCancel={(e) => {
        e.preventDefault();
        router.back();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) router.back();
      }}
    >
      <div className="modal-inner">
        <button
          className="close-modal"
          onClick={() => router.back()}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
}

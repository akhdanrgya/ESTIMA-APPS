"use client";
import { useEffect, useId, useRef } from "react";
export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => { const dialog = ref.current; dialog?.showModal(); return () => dialog?.close(); }, []);
  return <dialog ref={ref} aria-labelledby={titleId} className="workspace-modal" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}><div className="modal-content"><header><h2 id={titleId}>{title}</h2><button type="button" onClick={onClose} aria-label="Close dialog">×</button></header>{children}</div></dialog>;
}

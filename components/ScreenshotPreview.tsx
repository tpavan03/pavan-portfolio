"use client";
import { useRef } from "react";
export default function ScreenshotPreview({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" onClick={() => dialog.current?.showModal()}>
        View screenshot ↗
      </button>
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-label={`${title} screenshot`}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="screenshot-frame">
          <div>
            <p>
              {title} <span>Actual application screenshot</span>
            </p>
            <button
              autoFocus
              type="button"
              aria-label="Close screenshot"
              onClick={() => dialog.current?.close()}
            >
              Close ×
            </button>
          </div>
          <img
            src={src}
            alt={`${title} application interface`}
            loading="lazy"
          />
        </div>
      </dialog>
    </>
  );
}

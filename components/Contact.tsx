"use client";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/portfolio";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    setStatus("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!r.ok)
        throw Error(
          r.status === 429
            ? "Please wait 15 minutes before sending again."
            : "Could not save your message. Please try email instead.",
        );
      setStatus("Message saved. Thanks for reaching out!");
      form.reset();
    } catch (err) {
      setStatus(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try email.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="contact-widget">
      <div className="contact-actions">
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(siteConfig.email);
              setCopied(true);
              setTimeout(() => setCopied(false), 2500);
            } catch {
              setStatus("Please select and copy the email address above.");
            }
          }}
          aria-label="Copy email address"
        >
          {copied ? "Copied ✓" : "Copy email"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </div>
      <a className="phone-contact" href={`tel:+91${siteConfig.phone}`}>
        Call +91 {siteConfig.phone} ↗
      </a>
      <button
        className="message-toggle"
        aria-expanded={open}
        aria-controls="contact-form"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close message form −" : "Or leave a message ↗"}
      </button>
      {open && (
        <form id="contact-form" onSubmit={submit} className="contact-form">
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Alex Morgan"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="alex@example.com"
              />
            </label>
          </div>
          <label>
            What are you working on?
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={4}
              placeholder="Tell me a little about your idea…"
            />
          </label>
          <label className="honeypot" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="form-bottom">
            <p>
              This local preview saves messages on this computer.
              <br />
              Use email to reach me directly.
            </p>
            <button className="button-primary" disabled={busy}>
              {busy ? "Saving…" : "Send message ↗"}
            </button>
          </div>
        </form>
      )}
      <p className="form-status" role="status">
        {status}
      </p>
    </div>
  );
}

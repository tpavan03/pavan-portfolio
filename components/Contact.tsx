"use client";
import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
const topics = [
  "An AI product",
  "A role or collaboration",
  "Research",
  "Just saying hello",
];
export default function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState("");
  return (
    <div className="contact-widget">
      <p className="eyebrow">WHAT’S ON YOUR MIND?</p>
      <div className="contact-topics">
        {topics.map((t) => (
          <button
            key={t}
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <a
        className="contact-email"
        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(topic + " — Let's connect")}`}
      >
        Start a conversation <span>↗</span>
      </a>
      <div className="contact-direct">
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <button
          aria-label="Copy email address"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(siteConfig.email);
              setStatus("Email address copied");
            } catch {
              setStatus("Select the email address to copy it.");
            }
          }}
        >
          Copy email ↗
        </button>
      </div>
      <div className="contact-socials">
        <a href={`tel:+91${siteConfig.phone}`}>+91 {siteConfig.phone} ↗</a>
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
      <p className="form-status" role="status">
        {status}
      </p>
    </div>
  );
}

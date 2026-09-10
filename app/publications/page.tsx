import type { Metadata } from "next";
import { education, publications } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Research & education",
  description: "PhishBuster research and Pavan's academic background.",
};
export default function PublicationsPage() {
  return (
    <main id="main-content" className="shell section inner-page">
      <p className="eyebrow accent">RESEARCH / EDUCATION</p>
      <h1>
        Ask why.
        <br />
        <em>Go deeper.</em>
      </h1>
      <p className="page-intro">
        Applied machine learning, interpretable security, and the foundations
        behind the work.
      </p>
      {publications.map((p) => (
        <article className="publication-detail" key={p.title}>
          <p className="eyebrow accent">
            {p.venue} · {p.published}
          </p>
          <h2>{p.title}</h2>
          <p>
            Phishing detection using URL embeddings and deep learning, with
            Integrated Gradients explanations and faithfulness checks.
          </p>
          <p>
            Compared BERT, SBERT, USE, RoBERTa and ALBERT representations with
            FFNN, RNN and LSTM models. The research reports 99.9% accuracy for
            the RoBERTa-based LSTM on its evaluated dataset.
          </p>
          <a
            className="button-primary"
            href={p.doi}
            target="_blank"
            rel="noreferrer"
          >
            Open publication DOI ↗
          </a>
        </article>
      ))}
      <div className="education education-page">
        {education.map((e) => (
          <article key={e.degree}>
            <p className="eyebrow">{e.duration}</p>
            <h3>{e.degree}</h3>
            <p>{e.institution}</p>
            <strong>{e.score}</strong>
          </article>
        ))}
      </div>
    </main>
  );
}

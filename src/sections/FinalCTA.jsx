import { finalCta } from "../data/siteContent";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
          {finalCta.eyebrow}
        </div>
        <h2 style={{ marginTop: "14px" }}>
          {finalCta.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < finalCta.headline.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p>{finalCta.description}</p>
        <div className="hero-ctas">
          <a href={finalCta.primaryCta.href} className="btn-primary">
            {finalCta.primaryCta.label} →
          </a>
          <a href={finalCta.secondaryCta.href} className="btn-secondary">
            {finalCta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

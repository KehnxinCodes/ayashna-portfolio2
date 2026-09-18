import { siteInfo, hero } from "../data/siteContent";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-top">
          <div className="eyebrow">
            {siteInfo.role} <span className="dot">·</span> {siteInfo.location}
          </div>
          <div className="hero-tags">
            {siteInfo.tags.map((tag, i) => (
              <span className="tag" key={tag}>
                {tag}
                {i < siteInfo.tags.length - 1 ? " ·" : ""}
              </span>
            ))}
          </div>
        </div>

        <h1 className="headline">
          {hero.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < hero.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div className="hero-sub">
          <p className="hero-desc">{hero.description}</p>
          <div className="hero-ctas">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label} →
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="showreel">
          <span className="showreel-label">{hero.showreelLabel}</span>
          {hero.showreelVideo ? (
            <video src={hero.showreelVideo} muted loop playsInline />
          ) : (
            <div className="play-btn" aria-hidden="true"></div>
          )}
        </div>
      </div>
    </section>
  );
}

import { about } from "../data/siteContent";

export default function About() {
  return (
    <section className="alt" id="about">
      <div className="wrap">
        <div className="eyebrow">{about.eyebrow}</div>
        <div className="about-grid">
          <h2 className="about-headline">
            {about.headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < about.headline.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <div>
            {about.paragraphs.map((p, i) => (
              <p className="about-body" key={i}>{p}</p>
            ))}
            <div className="portrait">
              {about.portraitImage && <img src={about.portraitImage} alt="Ayashna" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

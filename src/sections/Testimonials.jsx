import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="alt">
      <div className="wrap">
        <div className="eyebrow" style={{ textAlign: "center" }}>06 — Client Words</div>
        <div className="testimonial" style={{ marginTop: "20px" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text">{active.quote}</p>
          <div className="quote-meta">
            <strong>{active.name}</strong> — {active.role}
          </div>
          {active.isPlaceholder && (
            <div className="placeholder-flag">
              Placeholder testimonial — replace with real client quote
            </div>
          )}

          {testimonials.length > 1 && (
            <div className="testimonial-nav">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  className={`testimonial-dot ${i === index ? "active" : ""}`}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

@ -0,0 +1,57 @@
import { useRef, useState } from "react";
import { industries } from "../data/siteContent";

export default function Industries() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(industries.length - 1, index));
    setActiveIndex(clamped);
    const el = trackRef.current?.children[clamped];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section>
      <div className="wrap">
        <div className="industries-header">
          <div className="eyebrow">Working Across Industries</div>
          <div className="industries-arrows">
            <button
              className="industries-arrow-btn"
              aria-label="Previous industry"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              ‹
            </button>
            <button
              className="industries-arrow-btn"
              aria-label="Next industry"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === industries.length - 1}
            >
              ›
            </button>
          </div>
        </div>
        <div className="industries-viewport">
          <div className="industries-track" ref={trackRef}>
            {industries.map((industry, i) => (
              <span
                key={industry}
                className={i === activeIndex ? "active" : ""}
                onClick={() => goTo(i)}
              >
                {industry}
              </span>
            ))}
          </div>
          <div className="industries-fade left" aria-hidden="true"></div>
          <div className="industries-fade right" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}

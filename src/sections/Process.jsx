import { processIntro, processSteps } from "../data/process";

export default function Process() {
  return (
    <section className="alt" id="process">
      <div className="wrap">
        <div className="eyebrow">{processIntro.eyebrow}</div>
        <h2 style={{ fontSize: "clamp(32px,5vw,54px)", marginTop: "14px" }}>
          {processIntro.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < processIntro.headline.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="process-list">
          {processSteps.map((step, i) => (
            <div className="process-item" key={step.title}>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="process-title">{step.title}</span>
              <span className="process-desc">{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

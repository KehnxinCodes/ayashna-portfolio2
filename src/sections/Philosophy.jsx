import { philosophy } from "../data/siteContent";

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="wrap">
        <h2>
          "{philosophy.lines.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <span className="accent">{philosophy.accent}</span>"
        </h2>
      </div>
    </section>
  );
}

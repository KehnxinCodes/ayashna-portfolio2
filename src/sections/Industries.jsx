import { industries } from "../data/siteContent";

export default function Industries() {
  return (
    <section>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: "30px" }}>
          Working Across Industries
        </div>
        <div className="industries-track">
          {industries.map((industry, i) => (
            <span key={industry} className={i === 0 ? "active" : ""}>
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

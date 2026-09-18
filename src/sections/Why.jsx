import { whySection } from "../data/siteContent";

export default function Why() {
  return (
    <section>
      <div className="wrap">
        <div className="eyebrow">{whySection.eyebrow}</div>
        <div className="why" style={{ marginTop: "20px" }}>
          <p>{whySection.lead}</p>
          <p>{whySection.body}</p>
        </div>
      </div>
    </section>
  );
}

import { servicesIntro, services } from "../data/services";

export default function Services() {
  return (
    <section className="alt" id="services">
      <div className="wrap">
        <div className="eyebrow">{servicesIntro.eyebrow}</div>
        <h2 style={{ fontSize: "clamp(32px,5vw,54px)", marginTop: "14px", marginBottom: "50px" }}>
          {servicesIntro.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < servicesIntro.headline.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {services.map((service, i) => (
          <div className="service-row" key={service.title}>
            <div className="service-left">
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="service-title">{service.title}</span>
            </div>
            <p className="service-desc">{service.description}</p>
            <div className="service-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

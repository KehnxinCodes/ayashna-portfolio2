import { contact } from "../data/siteContent";

export default function Contact() {
  return (
    <section className="alt" id="contact">
      <div className="wrap contact-inner">
        <h2>
          {contact.headline.map((line, i) => (
            <span key={i}>
              {line}
              {i < contact.headline.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {contact.socials.map((s) => (
            <a key={s.label} href={s.href}>{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

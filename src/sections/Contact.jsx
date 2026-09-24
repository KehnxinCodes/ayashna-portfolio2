import { contact } from "../data/siteContent";

const gmailComposeUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

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
          <a
            href={gmailComposeUrl(contact.email)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.email}
          </a>
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

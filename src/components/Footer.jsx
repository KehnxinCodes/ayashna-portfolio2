import { siteInfo, footer } from "../data/siteContent";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col">
            <h4>{siteInfo.name}</h4>
            <p style={{ color: "var(--gray)", fontSize: "14px" }}>
              {siteInfo.role}
              <br />
              {siteInfo.location}
            </p>
          </div>
          {footer.columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

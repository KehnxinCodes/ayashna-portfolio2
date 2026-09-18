import { useEffect, useState } from "react";
import { siteInfo, nav } from "../data/siteContent";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <nav>
            <a href="#top" className="logo">{siteInfo.name}</a>
            <div className="nav-links">
              {nav.links.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
            <a href={nav.cta.href} className="nav-cta">{nav.cta.label}</a>
            <button
              className={`mobile-toggle ${menuOpen ? "open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        {nav.links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={nav.cta.href} className="nav-cta" onClick={() => setMenuOpen(false)}>
          {nav.cta.label}
        </a>
      </nav>
    </>
  );
}

import { useState, useMemo } from "react";
import { PORTFOLIO_CATEGORIES, projects } from "../data/projects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">03 — Selected Work</div>
        <h2 style={{ fontSize: "clamp(32px,5vw,54px)", marginTop: "14px" }}>
          A few things I've made.
        </h2>

        <div className="filters">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((project) => (
            <button
              key={project.id}
              className={`p-item size-${project.size}`}
              aria-label={`View project: ${project.title}`}
            >
              <div className="p-thumb">
                {project.thumbnail && <img src={project.thumbnail} alt="" />}
              </div>
              <div className="p-overlay">
                <div className="p-cat">{project.category}</div>
                <div className="p-title">{project.title}</div>
                <div className="p-view">View Project →</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

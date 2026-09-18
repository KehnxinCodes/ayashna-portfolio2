import { getFeaturedProject } from "../data/projects";

export default function Featured() {
  const project = getFeaturedProject();

  return (
    <section className="alt">
      <div className="wrap">
        <div className="eyebrow">Featured Edit</div>
        <div className="featured" style={{ marginTop: "26px" }}>
          <div className="featured-media">
            {project.thumbnail && <img src={project.thumbnail} alt="" />}
          </div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#work" className="btn-secondary" style={{ marginTop: "24px", display: "inline-block" }}>
              View Full Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

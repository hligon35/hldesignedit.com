function PageIntro({ eyebrow, title, description, actions }) {
  return (
    <section className="hero-section sas-hero-panel">
      <div className="hero-content sas-page-intro">
        {eyebrow ? <div className="sas-eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        <p className="value-proposition">{description}</p>
        {actions ? <div className="hero-actions sas-hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}

export default PageIntro;
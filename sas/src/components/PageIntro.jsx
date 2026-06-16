function PageIntro({ eyebrow, title, description, actions, panel }) {
  return (
    <section className="hero-section sas-hero-panel">
      <div className="hero-content sas-page-intro-shell">
        <div className="sas-page-intro">
          {eyebrow ? <p className="sas-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="value-proposition">{description}</p>
          {actions ? <div className="hero-actions sas-hero-actions">{actions}</div> : null}
        </div>
        {panel ? <div className="sas-hero-aside">{panel}</div> : null}
      </div>
    </section>
  );
}

export default PageIntro;
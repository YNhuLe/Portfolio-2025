import "./DetailSection.scss";
function DetailSection({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <div className={`info__card ${isEven ? "reverse" : ""}`}>
      <div className="info__card-text">
        <h2 className="info__card-title">{project.title} </h2>
        {project.content.split("\n").map((line, idx) => (
          <p className="info__card-content" key={idx}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function FeatureSections({ project }) {
  return (
    <div className="fea">
      <h3 className="fea__id">{project.fea_id}</h3>
      <p className="fea__title">{project.fea_title}</p>
      <p className="fea__description">{project.fea_description}</p>
    </div>
  );
}

function SystemDesignSections({ project }) {
  return (
    <div className="system">
      <div className="system__card">
        <div className="system__card-marker">
          <div className="system__card-line" />
          <h3 className="system__card-id">{project.system_id}</h3>
        </div>
        <div className="system__card-content">
          <p className="system__card-title">{project.system_title}</p>
          <p className="system__card-description">
            {project.system_description}
          </p>
        </div>
      </div>
    </div>
  );
}
export { DetailSection, FeatureSections, SystemDesignSections };

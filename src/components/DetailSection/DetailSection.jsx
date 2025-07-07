import "./DetailSection.scss";
function DetailSection({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <div className={`info__card ${isEven ? "reverse" : ""}`}>
      <div className="info__card-text">
        <h2 className="info__card-title">{project.title} </h2>
        <p className="info__card-content">{project.content}</p>
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="info__card-img"
        loading="lazy"
      />
    </div>
  );
}

export default DetailSection;
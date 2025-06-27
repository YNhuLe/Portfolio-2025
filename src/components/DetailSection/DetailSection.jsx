import "./DetailSection.scss";
function DetailSection({ project }) {
  return (
    <div className="info__card">
      <h2 className="info__card-title">{project.title} </h2>
      <p className="info__card-content">{project.content}</p>
      <img src={project.image} alt={project.title} className="info__card-img" />
    </div>
  );
}

export default DetailSection;
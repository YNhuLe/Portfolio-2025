import "./DetailsPage.scss";
import DetailSection from "../../components/DetailSection/DetailSection";
import Navigation from "../../components/Navigation/Navigation";
import { useProjectContext } from "../../context/ProjectContext";
import { useParams } from "react-router-dom";
import { div } from "motion/react-client";
function DetailsPage() {
  const { project, loading, error } = useProjectContext();
  const { slug } = useParams();
  if (loading) return <p>Loading the data...</p>;
  if (error) return <p>{error}</p>;
  const pro = project.find((p) => p.slug === slug);
  if (!pro) return <p>Project not found..</p>;

  return (
    <>
      <h1 className="pro__title">{pro.title}</h1>
      <h2 className="pro__subtitle">A modern case stud on impact and result</h2>
      <div className="btn-section">
        <a className="button button-dive">Dive deeper</a>
        <a className="button button-demo">See demo</a>
      </div>
      <img src={pro.img_url} alt={pro.title} className="pro__img" />
      {pro.info.map((project, index) => (
        <div key={index}>
          <DetailSection project={project} />
        </div>
      ))}
    </>
  );
}

export default DetailsPage;

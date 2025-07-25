import "./DetailsPage.scss";
import DetailSection from "../../components/DetailSection/DetailSection";
import Navigation from "../../components/Navigation/Navigation";
import { useProjectContext } from "../../context/ProjectContext";
import { useParams } from "react-router-dom";
import goback from "../../assets/icons/goback.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import GalaxyParticles from "../../components/GalaxyParticles/GalaxyParticles";
function DetailsPage() {
  const { project, loading, error } = useProjectContext();
  const { slug } = useParams();
  if (loading) return <p>Loading the data...</p>;
  if (error) return <p>{error}</p>;
  const pro = project.find((p) => p.slug === slug);
  if (!pro) return <p>Project not found..</p>;

  return (
    <section className="galaxy">
      <div className="galaxy-particles">
        <GalaxyParticles />
      </div>
      <a href="./" className="back-icon">
        <img src={goback} alt="go-back icon" className="back-img" />
      </a>
      <div className="pro__details">
        <h1 className="pro__title">{pro.title}</h1>
        <div className="pro__subtitle">
          {pro.description.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <div className="btn-section">
          <a className="button button-dive" href={pro.git_url}>
            Dive deeper
          </a>
          <a className="button button-demo" href={pro.video_demo.url}>
            See demo
          </a>
        </div>
        <img src={pro.img_url} alt={pro.title} className="pro__img" />
        {pro.info.map((project, index) => (
          <div key={index}>
            <DetailSection project={project} key={index} index={index} />
          </div>
        ))}

        <Footer />
      </div>
    </section>
  );
}

export default DetailsPage;

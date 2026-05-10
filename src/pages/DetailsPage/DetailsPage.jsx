import "./DetailsPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import { useProjectContext } from "../../context/ProjectContext";
import { useParams } from "react-router-dom";
import logo from "/images/logo.jpg";
import goback from "../../assets/icons/goback.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import GalaxyParticles from "../../components/GalaxyParticles/GalaxyParticles";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Layers,
  ChevronLeft,
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import {
  DetailSection,
  FeatureSections,
  SystemDesignSections,
} from "../../components/DetailSection/DetailSection";
import { div } from "motion/react-client";
function DetailsPage() {
  const { project, loading, error } = useProjectContext();
  const { slug } = useParams();
  if (loading) return <p>Loading the data...</p>;
  if (error) return <p>{error}</p>;
  const pro = project.find((p) => p.slug === slug);
  if (!pro) return <p>Project not found..</p>;
  return (
    <section className="pro">
      <div className="pro__nav">
        <a href="./" className="pro__icon">
          <ChevronLeft className="pro__icon-left" />
        </a>

        <a href="./" className="pro__logo">
          <img src={logo} alt="logo" className="pro__logo-img" loading="lazy" />
        </a>
      </div>
      <div className="pro__details">
        <p className="pro__num" style={{ color: pro.accentText }}>
          {" "}
          {pro.id} - {pro.title}
        </p>
        <h1 className="pro__title">{pro.title}</h1>
        <p className="pro__concept">{pro.concept}</p>
        <p className="pro__role">
          <span className="pro__role-head">Role</span> {pro.role}
        </p>

        <div className="pro__links">
          <a href={pro.git_url} className="pro__links-section">
            <Github className="pro__links-section-icon" />
            <span className="pro__links-text">GitHub</span>
          </a>
          <a href={pro.video_demo.url} className="pro__links-section demo">
            <span
              className="pro__links-text demo"
              style={{
                "--accent-text": pro.accentText,
                "--glow-color": pro.accentGlow,
              }}
            >
              Live Demo
            </span>
            <ArrowUpRight
              className="pro__links-section-icon demo"
              style={{
                "--accent-text": pro.accentText,
                "--glow-color": pro.accentGlow,
              }}
            />
          </a>
        </div>
        <div className="pro__breakline" />
      <div className="pro__img-container">
        <img src={pro.img_url} alt={pro.title} className="pro__img" />
        </div>
        <div className="pro__overview">
          <div className="pro__subtitle">
            <span className="pro__subtitle-head">Overview</span>
            {pro.description.split("\n").map((line, idx) => (
              <p className="pro__subtitle-text" key={idx}>
                {line}
              </p>
            ))}
          </div>

          <div>
            <p className="pro__subtitle-head"> Stack</p>
            <div className="pro__techstack"></div>
            {pro.tech_stack.map((tech, idx) => (
              <span key={idx} className="pro__techstack-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pro__breakline" />

      <section>
        <p className="pro__subtitle-head">Key Features</p>
        {/* FEATURES section */}
        <div className="pro__fea">
          {pro.features?.map((feature, idx) => (
            <div key={idx} className="pro__fea-item">
              <FeatureSections project={feature} index={idx} />
            </div>
          ))}
        </div>

        {/* SYSTEM DESIGN section */}

        <div className="pro__breakline" />
        <p className="pro__subtitle-head">System Design</p>
        <p className="system__des">{pro.system_design_description}</p>
        {pro.system_design?.map((system, idx) => (
          <div key={idx} className="system">
            <SystemDesignSections project={system} index={idx} pro={pro} />
          </div>
        ))}

        {/* Challenges and solution section */}

        <div>
          <div className="pro__breakline" />
          <p className="pro__subtitle-head">Challenges & Solutions</p>
        </div>
        {pro.info?.map((challenge, index) => (
          <div key={index}>
            <div className="pro__breakline" />
            <p className="pro__subtitle-text">{project.id}</p>
            <DetailSection project={challenge} />
          </div>
        ))}
      </section>

      <div className="more__projects">
        <div className="pro__breakline" />
        <p className="pro__subtitle-head">More Projects</p>

        <div className="more__projects">
          {/* previous projects */}
          <div className="more__projects-prev">
            {pro.id > 1 ? (
              <a href={`./${project[Number(pro.id) - 2]?.slug}`}>
                <div className="pro__breakline" />
                <div className="more__projects-section">
                  <ArrowLeft className="icon-left" />
                  <div className="more__projects-content">
                    <p className="pro__subtitle-head">Prev</p>
                    <span className="more__projects-title">
                      {project[pro.id - 2].title}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}
          </div>
          <div className="pro__breakline" />
          {/* next projects */}

          <div className="more__projects-next">
            {pro.id < project.length ? (
              <a href={`./${project[Number(pro.id)]?.slug}`}>
                {" "}
                <div className="more__projects-section-next">
                  <ArrowRight className="icon-right" />
                  <div className="more__projects-content-next">
                    <p className="pro__subtitle-head">Next</p>
                    <span className="more__projects-title">
                      {project[Number(pro.id)]?.title}
                    </span>
                  </div>{" "}
                </div>{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default DetailsPage;

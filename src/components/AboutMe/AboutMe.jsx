import "./AboutMe.scss";
import headshot from "/images/headshot.png";
import Tilt from "react-parallax-tilt";
import githubIcon from "/logos/git3D.png";
import linked from "/logos/linked.png";
function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="headshot">
        <img src={headshot} alt="headhot_img" className="headshot__img" />
      </div>
      <div className="about__icon">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          transitionSpeed={250}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}>
          <a href="https://github.com/YNhuLe">
            <img src={githubIcon} alt="github" className="header_icon" />
          </a>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          transitionSpeed={250}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}>
          <a href="https://www.linkedin.com/in/jennynhuyle/">
            <img src={linked} alt="linked" className="header_icon" />
          </a>
        </Tilt>
      </div>

      <h1 className="about__title">Jenny Le</h1>
      <h2 className="about__text">Full-Stack Software Developer</h2>
      <p className="about__para">
        I'm a creative and driven Computer Systems Technology student from
        Sheridan College and BrainStation, with 7+ years in customer-facing
        roles. I love building things—whether through code, design, or DIY—and
        enjoy blending tech with creativity while learning and growing with
        others.
      </p>
    </section>
  );
}

export default AboutMe;

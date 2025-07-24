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
        I'm a creative and driven Computer Systems Technology graduate from
        Sheridan College and BrainStation, with over 7+ years of experience in
        customer-facing roles. I love building things—whether it's through code,
        design, or DIY projects—and I’m passionate about blending tech with
        creativity. I’m always learning, growing, and looking to collaborate
        with others who share a love for innovation.
      </p>
      <p className="about__para">
        If you're working on something exciting, have advice to share, or just
        want to chat about tech and creativity, feel free to connect with me on
        LinkedIn or check out my work on Github. I'd love to hear from you!
      </p>
    </section>
  );
}

export default AboutMe;

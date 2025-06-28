import "./Footer.scss";
import githubIcon from "/logos/git3D.png";
import linked from "/logos/linked.png";
import logo from "/images/logo.jpg";
import Tilt from "react-parallax-tilt";
function Footer() {
  return (
    // <div className="footer">
    //   <Tilt
    //     glareEnable={true}
    //     glareMaxOpacity={0.2}
    //     scale={1.05}
    //     transitionSpeed={250}
    //     tiltMaxAngleX={15}
    //     tiltMaxAngleY={15}>
    //     <a href="https://github.com/YNhuLe">
    //       <img src={githubIcon} alt="github" className="footer_icon" />
    //     </a>
    //   </Tilt>
    //   <Tilt
    //     glareEnable={true}
    //     glareMaxOpacity={0.2}
    //     scale={1.05}
    //     transitionSpeed={250}
    //     tiltMaxAngleX={15}
    //     tiltMaxAngleY={15}>
    //     <a href="https://www.linkedin.com/in/jennynhuyle/">
    //       <img src={linked} alt="linked" className="footer_icon" />
    //     </a>
    //   </Tilt>
    // </div>

    <section className="footer">
      <a href="./" className="logo__link">
        <img src={logo} alt="logo" className="footer__logo" loading="lazy" />
      </a>
      <section className="portfolio">
        <h2 className="footer__title">Portfolio</h2>
        <li className="footer__list">
          <ul>About</ul>
          <ul>Project</ul>
          <ul>Stack</ul>
        </li>
      </section>
      <section className="projects">
        <h2 className="footer__title">Project</h2>
        <li className="footer__list">
          <ul>Streamline</ul>
          <ul>QueryLens</ul>
          <ul>OutComes</ul>
        </li>
      </section>
      <section className="connect">
        <h2 className="footer__title">Connect</h2>
        <li className="footer__list">
          <ul>LinkedIn</ul>
          <ul>GitHub</ul>
          <ul>Email</ul>
        </li>
      </section>
    </section>
  );
}

export default Footer;

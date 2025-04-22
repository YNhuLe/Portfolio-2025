import "./Footer.scss";
import githubIcon from "/logos/git3D.png";
import linked from "/logos/linked.png";
import Tilt from "react-parallax-tilt";
function Footer() {
  return (
    <div className="footer">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={250}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}>
        <a href="https://github.com/YNhuLe">
          <img src={githubIcon} alt="github" className="footer_icon" />
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
          <img src={linked} alt="linked" className="footer_icon" />
        </a>
      </Tilt>
    </div>
  );
}

export default Footer;

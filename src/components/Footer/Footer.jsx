import "./Footer.scss";
import githubIcon from "/logos/git3D.png";
import linked from "/logos/linked.png";
function Footer() {
  return (
    <div className="footer">
      <a href="">
        <img src={githubIcon} alt="github" className="footer_icon" />
      </a>
      <a href="">
        <img src={linked} alt="linked" className="footer_icon" />
      </a>
    </div>
  );
}

export default Footer;

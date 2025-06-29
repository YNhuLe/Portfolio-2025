import { useLocation } from "react-router-dom";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "/images/logo.jpg";

import { Link } from "react-scroll";
function Footer() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <a href="./" className="logo__link">
        <img src={logo} alt="logo" className="footer__logo" loading="lazy" />
      </a>
      <section className="portfolio">
        <h2 className="footer__title">Portfolio</h2>
        <li className="footer__list">
          <ul className="footer__list-links">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </ul>
          <ul className="footer__list-links">
            <Link to="projects" smooth={true} duration={500}>
              Project
            </Link>
          </ul>
          <ul className="footer__list-links">
            <Link to="techstack" smooth={true} duration={500}>
              Stack
            </Link>
          </ul>
        </li>
      </section>
      {/* <section className="projects">
        <h2 className="footer__title">Project</h2>
        <li className="footer__list">
          <ul>Streamline</ul>
          <ul>QueryLens</ul>
          <ul>OutComes</ul>
        </li>
      </section> */}
      <section className="connect">
        <h2 className="footer__title">Connect</h2>
        <li className="footer__list">
          <a href="https://www.linkedin.com/in/jennynhuyle/">
            <ul className="footer__list-links">LinkedIn</ul>
          </a>
          <a href="https://github.com/YNhuLe">
            <ul className="footer__list-links">GitHub</ul>
          </a>
          <a href="mailto:Lenhuy10011996@gmail.com">
            <ul className="footer__list-links">Email</ul>
          </a>
        </li>
      </section>
      <p className="copy-right">Made with 💟 & ☕ {year} © Jenny</p>
    </section>
  );
}

export default Footer;

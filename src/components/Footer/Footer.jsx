import { useLocation } from "react-router-dom";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "/images/logo.jpg";

function Footer() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const year = new Date().getFullYear();
  return (
    <>
      <section className="footer">
        <a href="./" className="logo__link">
          <img src={logo} alt="logo" className="footer__logo" loading="lazy" />
        </a>

        <div className="footer__section">
          <section className="portfolio">
            <h2 className="footer__title">Portfolio</h2>
            <li className="footer__list">
              <ul>
                {isMainPage ? (
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="footer__list-links">
                    About
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#about" className="footer__list-links">
                    About
                  </RouterLink>
                )}
              </ul>
              <ul>
                {isMainPage ? (
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="footer__list-links">
                    Project
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#projects" className="footer__list-links">
                    Project
                  </RouterLink>
                )}
              </ul>
              <ul>
                {isMainPage ? (
                  <ScrollLink
                    to="techstack"
                    smooth={true}
                    duration={500}
                    className="footer__list-links">
                    Stack
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#techstack" className="footer__list-links">
                    Stack
                  </RouterLink>
                )}
              </ul>
            </li>
          </section>
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
        </div>
      </section>
      <p className="copy-right">Made with 💟 & ☕ {year} © Jenny</p>
    </>
  );
}

export default Footer;

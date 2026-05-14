import { useLocation } from "react-router-dom";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { Linkedin, Github, Mail } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import logo from "/images/logo.jpg";

function Footer() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jennynhuyle/",
      icon: <Linkedin />,
    },
    {
      href: "https://github.com/YNhuLe",
      icon: <Github />,
    },
    {
      href: "mailto:jennyle.tech@gmail.com",
      icon: <Mail />,
    },
  ];
  return (
    <>
      <div className="footer__breakline"/>
      <section className="footer__container">
      <div className="footer">
        <a href="./" className="logo__link">
          <img src={logo} alt="logo" className="footer__logo" loading="lazy" />
        </a>
        <p className="copy-right">© {year} Jenny Le — Crafted with ❤️ & ☕ </p>
      </div>
      <div className="footer__section">
        {socialLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="footer__section-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div></section>
    </>
  );
}

export default Footer;

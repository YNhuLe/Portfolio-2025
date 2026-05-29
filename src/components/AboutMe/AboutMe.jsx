import "./AboutMe.scss";
import headshot from "/images/headshot.jpg";
import Tilt from "react-parallax-tilt";
import githubIcon from "/logos/git3D.png";
import linked from "/logos/linked.png";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Layers,
  MessageCircle, Plane,
  Hammer,
  Sprout, Footprints
} from "lucide-react";

import { Link as ScrollLink } from "react-scroll";

const hobbies = [

  {name: "Traveling", icon: Plane, brief: "Explore & Adventure"},

  {name: "Running", icon: Footprints, brief: "Trail & Road"},
  {name: "DIY Projects", icon: Hammer, brief: "Build & Create"},
  {name: "Planting", icon: Sprout, brief: "Grow & Nurture"}
]
function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about-badge">
        <span className="about-badge__dot">
          <span className="about-badge__ping"></span>
          <span className="about-badge__circle"></span>
        </span>
        Ready for new challenges!
      </div>

      <div className="headshot">
        <img src={headshot} alt="headshot_img" className="headshot__img" />
      </div>

      <div className="grid-bg"></div>
      <h1 className="about__title">
        Jenny <span className="about__last-name">Le</span>
      </h1>
      <h2 className="about__text">Full-Stack Software Engineer</h2>
      <p className="about__para">
        I'm a Computer Systems Technology grad with 7+ years in customer-facing
        roles. I love building things—whether it's code, design, or DIY
        projects—and I'm all about blending tech with creativity. Always
        learning, always looking to collaborate.
      </p>
      <p className="about__para">
        Working on something cool? Have advice to share? Let's connect on
        LinkedIn or check out my work on Github. I'd love to chat!
      </p>

      <div className="cta">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => {
            window.history.pushState(null, "", `#contact`);
          }}
          className="cta__primary"
        >
          <div className="cta__bg"></div>

          <span className="cta__icon">
            <MessageCircle />
          </span>
          <span className="cta__text">Get in Touch</span>
        </ScrollLink>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => {
            window.history.pushState(null, "", `#projects`);
          }}
          className="cta__secondary"
        >
          <span className="cta__icon">
            <Layers />
          </span>
          <span>View Projects</span>
        </ScrollLink>
      </div>
      <div className="about__icon">
        <a href="https://github.com/YNhuLe" className="header_links">
          <Github className="header_icon" />
          <span className="header__text">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jennynhuyle/"
          className="header_links"
        >
          <Linkedin className="header_icon" />
          <span className="header__text">LinkedIn</span>
        </a>

        <a href="mailto:jennyle.tech@gmail.com" className="header_links">
          <Mail className="header_icon" />
          <span className="header__text">Email</span>
        </a>
      </div>

      {/* Beyond the Coding passion */}
      <div className="about__hobbies-container">
     <p className="about__hobbies-title">Beyond the Code</p>
   
 <div className="about__hobbies">
  
      {hobbies.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="about__hobbies-list">
            <Icon className="about__hobbies-icon" />
            <p className="about__hobbies-name">{item.name}</p>
            <p className="about__hobbies-brief">{item.brief}</p>
          </div>
        );
      })}
    </div></div>
    </section>
  );
}

export default AboutMe;

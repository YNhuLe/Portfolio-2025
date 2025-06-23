import Tilt from "react-parallax-tilt";
import "./MasonryLayout.scss";
import { FaGithub, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
function MasonryLayout({ items }) {
  return (
    <div className="masonry__layout">
      {items.map((item) => (
        // <div className="card__border" style={{ width: `${item.width}rem` }}>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.05}
          transitionSpeed={300}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          key={item.id}>
          <article className="masonry__item">
            <div className="img__project">
              <a href="/project-details" className="arrow-icon">
                <FaExternalLinkAlt size={20} />
              </a>
              <img
                src={item.img_url}
                alt="project-image"
                className="project__img"
                loading="lazy"
              />
            </div>
            <h2 className="project__title">{item.title}</h2>
            <div className="project__concept">
              <p className="project__text"> {item.concept}</p>
              {/* <div className="link">
              <a href={item.gitUrl} className="project__link">
                <FaGithub className="github-icon" size={24} />
              </a>
              <a href={item.link} className="project__link">
                <FaGlobe className="globe-icon" size={24} />
              </a>
            </div> */}
            </div>
            <div className="stack">
              <ul className="stack__list">
                {item.stack.map((tech, index) => (
                  <li className="stack__item" key={index}>
                    #{tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Tilt>
        // </div>
      ))}
    </div>
  );
}

export default MasonryLayout;

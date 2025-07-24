import Tilt from "react-parallax-tilt";
import "./MasonryLayout.scss";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
function MasonryLayout({ items }) {
  console.log("Items: ", items);

  const navigate = useNavigate();
  return (
    <div className="masonry__layout">
      {items.map((item) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.05}
          transitionSpeed={300}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          key={item.id}>
          <article
            className="masonry__item"
            onClick={() => navigate(`/${item.slug}`)}>
            <a href="/" className="arrow-icon">
              <FaExternalLinkAlt className="icon" />
              <span className="arrow-details">More details</span>
            </a>
            <div className="img__project">
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
            </div>
            <div className="stack">
              <ul className="stack__list">
                {item.tech_stack.map((tech, index) => (
                  <li className="stack__item" key={index}>
                    #{tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Tilt>
      ))}
    </div>
  );
}

export default MasonryLayout;

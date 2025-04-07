import "./MasonryLayout.scss";
import { FaGithub } from "react-icons/fa";
function MasonryLayout({ items }) {
  return (
    <div className="masonry__layout">
      {items.map((item) => (
        <div
          key={item.id}
          className="masonry__item"
          style={{ height: `17rem`, width: `${item.width}rem` }}>
          <div className="img__project">
            <img
              src={item.img_url}
              alt="project-image"
              className="project__img"
            />
          </div>
          <h2 className="project__title">{item.title}</h2>
          <div className="project__concept">
            <p className="project__text"> {item.concept}</p>
            <a href={item.gitUrl} className="project__link">
              <FaGithub className="github-icon" size={24} color="#ffff" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MasonryLayout;

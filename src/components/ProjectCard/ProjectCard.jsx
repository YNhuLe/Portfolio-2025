import { div } from "motion/react-client";
import "./ProjectCard.scss";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
function ProjectCard({ project }) {
const navigate = useNavigate();
console.log("ProjectCard: ", project);
  return (
    <div className="project_card"
    onClick={() => navigate(`/${project.slug}`)}
    
    >
      {/* project images */}

      <div className="project_card-group">
          <div className="project_card-image-wrapper">
        <img
          src={project.img_url}
          alt={project.title}
          className="project_card-image"
        /></div>

        {/* project number */}
        <div className="project_card-number">{project.id}</div>

        {/* top right icon */}

        <div className="project_card-icon">
          <ExternalLink className="project_card-icon-external" />
        </div>
        <div className="project_card-bottom" />
      </div>
      {/* Card content */}

      <div className="project_card-content">
        <div className="project_card-content-title">
          <h2 className="project_card-content-header">{project.title}</h2>
          <ArrowUpRight className="project_card-content-code2" />
        </div>
        <div>
          <p className="project_card-content-concept">{project.concept}</p>
          <ul className="project_card-content-stack">
            {project?.tech_stack?.map((tech, index) => (
              <li className="project_card-content-stack-item" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

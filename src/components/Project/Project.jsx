import MasonryLayout from "../MasonryLayout/MasonryLayout";
import "./Project.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useProjectContext } from "../../context/ProjectContext";
import {Code2} from "lucide-react";
function Project() {
  const { project, loading, error } = useProjectContext();

  if (loading) return <p>Loading project...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="project" id="projects">

      <div className="project__feature">
        <Code2 className="project__feature-icon" />
        
        <p className="project__feature-title">Featured Work</p>
      </div>
      <p className="project__section">My Projects</p>
      <p className="project__section-subtitle">Click any card to explore the full case study </p>

{
  project.map((p) =>(
    <ProjectCard key={p.id} project={p} />
  ))
}
    </div>
  );
}

export default Project;

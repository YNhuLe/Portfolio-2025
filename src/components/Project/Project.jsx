import MasonryLayout from "../MasonryLayout/MasonryLayout";
import "./Project.scss";

import { useProjectContext } from "../../context/ProjectContext";
function Project() {
  const { project, loading, error } = useProjectContext();

  if (loading) return <p>Loading project...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="project" id="projects">
      <p className="project__section">My Projects</p>
      <MasonryLayout items={project} />
    </div>
  );
}

export default Project;

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const result = await axios.get("/data.json");
        setProject(result.data);
      } catch (error) {
        setError("Fail to fetch project!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);
  return (
    <ProjectContext.Provider value={{ project, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
};
export const useProjectContext = () => useContext(ProjectContext);

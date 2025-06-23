import axios from "axios";
import MasonryLayout from "../MasonryLayout/MasonryLayout";
import "./Project.scss";
import { useEffect, useState } from "react";
function Project() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/data.json");
        setItems(result.data);
      } catch (error) {
        console.error(`Unable to fetch data : ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="project" id="projects">
      <p className="project__section">My Projects</p>
      <MasonryLayout items={items} />
    </div>
  );
}

export default Project;

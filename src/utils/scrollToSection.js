import { useCallback } from "react";

function scrollToSection(id, navigate) {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      navigate(`/${id}`);
    }
  }, 100);
}

export default scrollToSection;

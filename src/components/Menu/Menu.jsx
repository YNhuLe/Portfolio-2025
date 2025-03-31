import "./Menu.scss";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
function Layout() {
  const links = ["About Me", "Projects", "Garden", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = (event) => {
    event.preventDefault();
    setIsMenuOpen(() => !isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const isOpen = isMenuOpen ? "open" : "";
  return (
    <div className="menu__container" ref={menuRef}>
      <div className="menu-logo">
        <img src={logo} alt="logo" className="logo" />
        <button className="toggle" onClick={toggleMenu}>
          {isOpen ? <X className="x-icon" /> : <Menu className="burger-icon" />}
        </button>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="menu__list">
          <li>
            <a className="menu-link" href="/#">
              About Me
            </a>
          </li>
          <li>
            <a className="menu-link" href="/#">
              Projects
            </a>
          </li>
          <li>
            <a className="menu-link" href="/#">
              Gardens
            </a>
          </li>
          <li>
            <a className="menu-link" href="/#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;

import { useState, useEffect, useRef } from "react";
import "./BurgerMenu.scss";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
// import { Link } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="menu__container" ref={menuRef}>
      <img src={logo} alt="logo" className="logo" />
      <button className="toggle" onClick={toggleMenu}>
        {isOpen ? <X className="x-icon" /> : <Menu className="burger-icon" />}
      </button>
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

export default BurgerMenu;

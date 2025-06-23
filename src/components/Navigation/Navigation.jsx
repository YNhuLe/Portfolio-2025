import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Navigation.scss";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Stacks", id: "techstack" },
  {
    name: "Contact",
    id: "contact",
  },
];

function Navigation({ onClose, isOpen, isMobile }) {
  const closeMenu = () => {
    if (onClose) {
      onClose();
    }
  };

  if (isMobile) {
    if (!isOpen) return null;

    return (
      <motion.ul
        initial="closed"
        className="list"
        variants={navVariants}
        animate={isOpen ? "open" : "closed"}>
        {items.map(({ name, id }) => (
          <MenuItem
            itemName={name}
            id={id}
            key={name}
            onClose={onClose}
            onClick={closeMenu}
          />
        ))}
      </motion.ul>
    );
  }

  return (
    <div className="nav__list">
      {items.map(({ name, id }) => (
        <Link
          key={id}
          to={id}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-placeholder desktop-link">
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;

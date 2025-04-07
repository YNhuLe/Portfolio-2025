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
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Garden", id: "garden" },
  {
    name: "Contact",
    id: "contact",
  },
];

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
function Navigation({ onClose, isOpen }) {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <motion.ul
      initial="closed"
      className="list"
      variants={navVariants}
      animate={isOpen ? "open" : "closed"}>
      {items.map(({ name, id }) => (
        // <motion.li key={name} variants={itemVariants}>
        <MenuItem itemName={name} id={id} key={name} onClose={onClose} />
        // </motion.li>
      ))}
    </motion.ul>
  );
}

export default Navigation;

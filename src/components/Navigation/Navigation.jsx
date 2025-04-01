import MenuItem from "../MenuItem/MenuItem";
import "./Navigation.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = [
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Garden", path: "/garden" },
  {
    name: "Contact",
    path: "/contact",
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
function Navigation({ isOpen }) {
  return (
    <motion.ul
      initial="closed"
      className="list"
      variants={navVariants}
      animate={isOpen ? "open" : "closed"}>
      {items.map(({ name, path }) => (
        // <motion.li key={name} variants={itemVariants}>
        <MenuItem itemName={name} path={path} key={name} />
        // </motion.li>
      ))}
    </motion.ul>
  );
}

export default Navigation;

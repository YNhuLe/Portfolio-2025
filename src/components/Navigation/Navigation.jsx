import { path } from "motion/react-client";
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
  { name: "About Me", path: "/" },
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
function Navigation() {
  return (
    <motion.ul className="list" variants={navVariants}>
      {items.map(({ name, path }) => (
        // <MenuItem itemName={itemName} key={itemName}>
        <motion.li
          key={name}
          className="list-item"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <Link to={path} className="text-placeholder">
            {name}
          </Link>{" "}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Navigation;

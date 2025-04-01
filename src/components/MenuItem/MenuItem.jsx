import "./MenuItem.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import scrollToSection from "../../utils/scrollToSection.js";
import { useNavigate } from "react-router-dom";
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
function MenuItem({ itemName, path }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); // Prevents immediate route change
    scrollToSection(itemName.toLowerCase(), navigate); // Scroll & update URL
  };
  return (
    <motion.li
      className="list-item"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <Link to={path} className="text-placeholder" onClick={handleClick}>
        {itemName}
      </Link>
    </motion.li>
  );
}

export default MenuItem;

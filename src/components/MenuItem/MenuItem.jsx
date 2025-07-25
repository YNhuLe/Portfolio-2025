import "./MenuItem.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
function MenuItem({ itemName, id, onClose, onClick }) {
  return (
    <motion.li
      className="list-item"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <Link
        to={id}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={onClick}
        className="text-placeholder">
        {itemName}
      </Link>
    </motion.li>
  );
}

export default MenuItem;

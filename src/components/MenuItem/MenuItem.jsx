import "./MenuItem.scss";

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
function MenuItem({ itemName }) {
  return (
    <motion.li
      className="list-item"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="text-placeholder">{itemName}</div>
    </motion.li>
  );
}

export default MenuItem;


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavBar.scss";
import Navigation from "../Navigation/Navigation";
import logo from "/images/logo.jpg";
import { AnimatePresence } from "framer-motion";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [togglePos, setTogglePos] = useState({ x: window.innerWidth - 41, y: 56 });

  const updateTogglePos = () => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      setTogglePos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  };

  useEffect(() => {
    updateTogglePos();
    const handleScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      updateTogglePos();
    };
    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []); 
  return (
    <div className="body__container">
      <a href="./" className="logo__link">
        <img src={logo} alt="logo" className="logo" loading="lazy" />
      </a>
      <div className="nav-bar">
        {isMobile ? (
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="nav">
            <div className="nav_div">
              <motion.div
                className="background"
                variants={sidebarVariants}
                custom={togglePos}
              />
              <AnimatePresence>
                {isOpen && (
                  <Navigation
                    key="mobile-nav"
                    onClose={() => setIsOpen(false)}
                    isOpen={isOpen}
                    isMobile={true}
                  />
                )}
              </AnimatePresence>
              <MenuToggle toggleRef={toggleRef} toggle={() => setIsOpen(!isOpen)} />
            </div>
          </motion.nav>
        ) : (
          <Navigation isMobile={false} />
        )}
      </div>
    </div>
  );
}

const getDiagonal = () =>
  Math.ceil(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)) * 2;

const sidebarVariants = {
  open: ({ x = 300, y = 56 } = {}) => ({
    clipPath: `circle(${getDiagonal()}px at ${x}px ${y}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: ({ x = 300, y = 56 } = {}) => ({
    clipPath: `circle(1px at ${x}px ${y}px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, toggleRef }) => (
  <button className="toggle-container" ref={toggleRef} onClick={toggle}>
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      className="menu-icon">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
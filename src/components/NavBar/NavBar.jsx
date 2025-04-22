import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavBar.scss";
import Navigation from "../Navigation/Navigation";
import logo from "/images/logo.jpg";
import { AnimatePresence } from "framer-motion";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
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
          custom={height}
          ref={containerRef}
          className="nav">
          <div className="nav_div">
            <motion.div className="background" variants={sidebarVariants} />
            <AnimatePresence>
              <Navigation
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
                isMobile={true}
              />
            </AnimatePresence>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </motion.nav>
      ) : (
        <Navigation isMobile={false} />
      )}
    </div>
  </div>
);
}

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 10}rem at 12rem 3.5rem)`,
    // clipPath: `circle(8vw at 82vw 2.5vh)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(.1rem at 16.5rem 3.5rem)",
    // clipPath: `circle(8vw at 82vw 2.5vh)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
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

const MenuToggle = ({ toggle }) => (
  <button className="toggle-container" onClick={toggle}>
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

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav} ref={menuRef}>
      <h2>CCS Central School</h2>

      {/* Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
        <li><NavLink to="/" end onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>About</NavLink></li>
        <li><NavLink to="/academics" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Academics</NavLink></li>
        <li><NavLink to="/admission" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Admission</NavLink></li>
        <li><NavLink to="/faculty" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Faculty</NavLink></li>
        <li><NavLink to="/gallery" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Gallery</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? styles.active : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

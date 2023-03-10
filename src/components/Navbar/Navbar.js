import React, {useState} from "react";
import styles from "./Navbar.module.css";
import Foto from "./../../assets/images/foto.png";
import { Link } from "react-router-dom";
import Modal from "../Modal.js/Modal";


const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };
  const [estadoModal1,cambiarEstadoModal1]=useState(false);
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={Foto} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Home
            </a>
            <Link to="/products" className={`${styles.nav} center`}>
              Products
            </Link>
            <Link to="/help" className={`${styles.nav} center`}>
              Help
            </Link>
            <Link to="/about" className={`${styles.nav} center`}>
              About
            </Link>
          </div>
          <div>
            <a href="/" className={styles.login}>
              Log in
            </a>
            <button className={styles.signup} onClick={()=>cambiarEstadoModal1(!estadoModal1)}>Sign Up</button>
            <Modal  estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

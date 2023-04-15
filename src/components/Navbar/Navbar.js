import React, {useState} from "react";
import styles from "./Navbar.module.css";
import Foto from "./../../assets/images/foto.png";
import { Link } from "react-router-dom";
import Modal from "../Modal.js/Modal";
import ModalRegister from "../ModalRegister/ModalRegister"

const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };
  const [estadoModal1,cambiarEstadoModal1]=useState(false);
  const [estadoModal2,cambiarEstadoModal2]=useState(false);

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
          
            <Link to="/store" className={`${styles.nav} center`}>
              Store
            </Link>
            <Link to="/help" className={`${styles.nav} center`}>
              Help
            </Link>
          </div>
          <div>
            <button className={styles.login} onClick={()=>cambiarEstadoModal1(!estadoModal1)}>Login</button>
            <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} />
            <button className={styles.signup} onClick={()=>cambiarEstadoModal2(!estadoModal2)}>Register</button>
            <ModalRegister estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

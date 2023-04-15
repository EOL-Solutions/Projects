import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarResponsive = ({ hamActive }) => {
function handleLinkClick(){
  hamActive(false);
}
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Home
            </a>
          </li>
          <li>
            <Link to = "/products" onClick={handleLinkClick}  className={`${styles.navR} center`}>
             Products
           
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={handleLinkClick}  className={`${styles.navR} center`}>
              Help
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleLinkClick} className={`${styles.navR} center`}>
              Exit
            </Link>
          </li>
        </ul>
  
      </div>
    </div>
  );
};
export default NavbarResponsive;

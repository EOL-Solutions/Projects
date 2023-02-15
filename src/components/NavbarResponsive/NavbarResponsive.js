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
              Departments
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              More ways to shop
            </a>
          </li>
          <li>
            <Link to="/help" onClick={handleLinkClick}  className={`${styles.navR} center`}>
              Help
            </Link>
          </li>
          <li>
            <Link to='/' onClick={handleLinkClick} className={`${styles.navR} center`}>
              Exit
            </Link>
          </li>
        </ul>
        
        <select className={styles.navRdropDown} name="" id="">
          <span className="flag-icon flag-icon-us"></span>{" "}
          <option value="US">United States</option>
          <span className="flag-icon flag-icon-in"></span>{" "}
          <option value="IN">India </option>
        </select>
      </div>
    </div>
  );
};
export default NavbarResponsive;

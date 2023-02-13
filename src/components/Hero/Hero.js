import styles from "./Hero.module.css";
import Fruta from "./fruta.png";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Order groceries for delivery or pickup today
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want from local stores, brought right to your door</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={Fruta} alt="123"/>
      </div>
    </div>
  );
};
export default Hero;

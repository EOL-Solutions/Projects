import styles from "./Hero.module.css";
import Fruta from "./../../assets/images/fruta.png";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
        Place an order for groceries to be delivered or picked up today.
        </h2>
        <div className={styles.slogan}>
          <p>Get anything you need from nearby stores, conveniently delivered to your doorstep.</p>
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

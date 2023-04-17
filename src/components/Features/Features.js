import { Fragment } from "react";
import styles from "./Features.module.css";
import { features } from "../../constants/features";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <p>Reliable grocery delivery service you can trust.</p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {features.map(({ feature, description, image },index) => {
            return (
              <div className={`${styles.featureDiv} center`} key={index}>
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <Link to ="/products">
      <button className={styles.shopBtn}>Start shopping</button>
      </Link>
    </div>
  );
};

export default Features;

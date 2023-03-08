import { Fragment } from "react";
import styles from "./ProductsToSale.module.css";
import { products } from "../../constants/products";
const ProductsToSale = () => {
  return (
    <div className={`${styles.productsWrapper} center`}>
      <div className={styles.productsHeading}>
        <p>Products in our Store</p>
      </div>
      <div className={`${styles.productsListWrapper} center`}>
        <div className={`${styles.productsList} center`}>
          {products.map(({ feature, description, image },index) => {
            return (
              <div className={`${styles.productsDiv} center`} key={index}>
                <Fragment>
                  <div className={styles.products}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.productsDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.productsImg} src={image} alt="img" />
                  </div>
                  </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.shopBtn}>Add To Cart</button>
    </div>
  );
};

export default ProductsToSale;
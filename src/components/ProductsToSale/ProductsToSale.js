import { Fragment, useState } from "react";
import styles from "./ProductsToSale.module.css";
import { products } from "../../constants/products";
import { Link } from "react-router-dom";

const ProductsToSale = () => {

  const [selectProductIndex,setSelectedProductIndex] = useState(null);
  const handleProductClick = (index) => {
    setSelectedProductIndex(index);
  };

  return (
    <div className={`${styles.productsWrapper} center`}>
      <div className={styles.productsHeading}>
        <p>Products in our Store</p>
      </div>
      <div className={`${styles.productsListWrapper} center`}>
        <div className={`${styles.productsList} center`}>
          {products.map(({ feature, description, image },index) => {
            const isSelected = selectProductIndex === index;
            return (
              <div 
              className={`${styles.productsDiv} center${
                isSelected ? styles.selectedProduct:""
              }`} 
              key={index}
                onClick={()=>handleProductClick}
              >
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
      <Link to="/store">
      <button className={styles.shopBtn}>Add To Cart</button>
      </Link>
    </div>
  );
};

export default ProductsToSale;
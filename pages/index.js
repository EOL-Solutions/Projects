import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useLoading } from '../components/hooks/useLoading';

import styles from '../styles/Home.module.scss';

export default function Home() {
  const {setLoading} = useLoading()
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('All Products')
  const [images, setImages] = useState("image1")
  useEffect(() => {
    const interval = setInterval(() => {
      if(images === "image1"){
        setImages("image2")
      }
      else if(images === "image2"){
        setImages("image3")
      }
      else if(images === "image3"){
        setImages("image1")
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [images])
  useEffect(() => {
    setLoading(true)
    !filterCategory && Promise.all([
    fetch('https://fakestoreapi.com/products'),
    fetch('https://fakestoreapi.com/products/categories')
    ]).then((values) => {
      return Promise.all(values.map((value) => value.json()));
    }).then((values) => {
      const [products, categories] = values;
      setProducts(products);
      setCategories(categories);
    }).finally(()=>setLoading(false))

  }, [filterCategory])

  const handleFilter= (category) => {
    setProducts([])
    setTitle(category)
    if(filterCategory === category){
      setFilterCategory('')
      setTitle('')
      return
    }
    else{
      setFilterCategory(category)
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>res.json())
      .then(json=>setProducts(json)).finally(()=>setLoading(false))
    }
  }
  return (
      <div className={styles.container}>
        <div className={styles.containerCarousel}>
          <div className={styles.carousel} id={styles[images]}>
            <img src="/images/eccomerce1.jpg" alt="carousel" />
          </div>
          <div className={styles.carousel} id={styles[images]}>
            <img src="/images/eccomerce2.jpg" alt="carousel" />
          </div>
          <div className={styles.carousel} id={styles[images]}>
          <img src="/images/eccomerce3.jpg" alt="carousel" />
          </div>
        </div>
        <h1>{title == '' ? 'All Products' : title}</h1>
        <div className={styles.containerCategories}>
          <button id={active ? styles.active : undefined} className={styles.btnCategories} onClick={() => setActive(!active)}>Categories</button>
          {active && <div className={styles.categories}>
            {categories.map(category=>(
              <button className={filterCategory == category ? styles.active : styles.inactive} key={category} onClick={() => handleFilter(category)}>
                <p>{category}</p>
              </button>
            ))}
          </div>}
        </div>
        <div className={styles.products}>
          {products.map(product=>(
            <Link href={`/product/${product.id}`} className={styles.product} key={product.id}>
              <div className={styles.buttons}>
                <button><FaShoppingCart/></button>
                <button><AiFillHeart/></button>
              </div>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </Link>
          ))}
        </div>
        <Footer/>
      </div>
  )
}

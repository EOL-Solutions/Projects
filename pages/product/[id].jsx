import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useLoading } from '../../components/hooks/useLoading'
import styles from '../../styles/cardProducts.module.scss'

const id = () => {
    const [product, setProduct] = useState({})
    const router = useRouter()
    const [rate, setRate] = useState(-1)
    const [click, setClick] = useState(false)
    const {setLoading} = useLoading()
    const newId = router.query.id
    useEffect(() => {
        setLoading(true)
        newId && fetch(`https://fakestoreapi.com/products/${newId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json)).finally(()=>setLoading(false))
    }, [newId])
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={product.image} alt="" />
        <div className={styles.cardInfo}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className={styles.containerRate}>
            <div className={styles.stars}>
              <AiFillStar onMouseEnter={() => !click && setRate(0) } onMouseLeave={() => !click && setRate(-1)} onClick={() => {setRate(0),setClick(true)}} id={rate >= 0 ? styles.active: null}/>
              <AiFillStar onMouseEnter={() => !click && setRate(1) } onMouseLeave={() => !click && setRate(-1)} onClick={() => {setRate(1),setClick(true)}} id={rate >= 1 ? styles.active: null}/>
              <AiFillStar onMouseEnter={() => !click && setRate(2) } onMouseLeave={() => !click && setRate(-1)} onClick={() => {setRate(2),setClick(true)}} id={rate >= 2 ? styles.active: null}/>
              <AiFillStar onMouseEnter={() => !click && setRate(3) } onMouseLeave={() => !click && setRate(-1)} onClick={() => {setRate(3),setClick(true)}} id={rate >= 3 ? styles.active: null}/>
              <AiFillStar onMouseEnter={() => !click && setRate(4) } onMouseLeave={() => !click && setRate(-1)} onClick={() => {setRate(4),setClick(true)}} id={rate >= 4 ? styles.active: null}/>
            </div>
            <div className={styles.rateInfo}>
              <p>{product.rating?.rate}</p>
              <p>({product.rating?.count} reviews)</p>
            </div>
          </div>
          <div className={styles.addCart}>
            <h3>${product.price}</h3>
            <Link href={'/'}>
              <button>Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default id
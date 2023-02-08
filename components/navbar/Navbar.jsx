import React from 'react'
import styles from '../../styles/Header.module.scss'
import {AiFillHeart, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Link href={'/'}><h1>Ecommerce</h1></Link>
            <div className={styles.search}>
                <input type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.signIn}>
                <AiOutlineUser/>
                <p>Sign in</p>
            </div>
            <div className={styles.signIn}>
                <AiFillHeart/>
                <p>Favorites</p>
            </div>
            <Link href={'/'} className={styles.cart}>
                <AiOutlineShoppingCart/>
                <p>Cart</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
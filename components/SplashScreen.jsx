import React from 'react'
import styles from '../styles/splashScreen.module.scss'

const SplashScreen = () => {
  return (
    <div className={styles.screen}>
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default SplashScreen
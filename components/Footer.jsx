import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                <FaInstagram/>
                <a href="https://www.linkedin.com/company/eol-solutions-sas/" target="_blank"><FaLinkedin /></a>
                <FaTwitter/>
            </div>
            <p>© 2021. All rights reserved.</p>
            <p>Created by EOL solutions SAS</p>
        </div>
    </div>
  )
}

export default Footer
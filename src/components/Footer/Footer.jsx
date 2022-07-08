import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <>
      <hr className={styles.hr}></hr>
      <footer className={styles.footer}>
    
          <div className="footer-left">
              <h2>Total this month</h2>
              <h1>$478.33</h1>
          </div>

          <div className="footer-right">
              <p>+2.4%</p>
              <p>from last month</p>
          </div>
          
      </footer>
    </>
  )
}

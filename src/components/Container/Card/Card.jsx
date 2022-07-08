import styles from './Card.module.css'
import { Footer } from '../../Footer/Footer'
export const Card = () => {
  return (
    <div className={styles.card}>
        <h1>Spending - Last 7 days</h1>
        <Footer />
    </div>
  )
}

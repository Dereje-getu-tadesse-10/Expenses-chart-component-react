import styles from './Card.module.css'
import { Footer } from '../../Footer/Footer'
import { SetChart } from '../Chart'
import data from '../../data.json'


export const Card = () => {

    const days = data.map(day => day.day)
    const amount = data.map(day => day.amount)

    return (
        <div className={styles.card}>
            <h1>Spending - Last 7 days</h1>
            <SetChart days={days} amount={amount}/>
            <Footer />
        </div>
    )


}

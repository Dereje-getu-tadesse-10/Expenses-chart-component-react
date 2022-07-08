import { Header } from "../Header/Header"
import '../assets/styles/Container.css'
import { Card } from "./Card/Card"

export const Container = () => {
  return (
    <section className="container">
        <Header />
        <Card />
    </section>
  )
}

import React from 'react'
import styles from './style.module.css'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Companies from '../../components/Companies'
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Companies />
    </div>
  )
}

export default Home

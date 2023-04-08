import React from 'react'
import styles from './style.module.css'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Companies from '../../components/Companies'
import How from '../../components/How'
import About from '../../components/About'
import Counter from '../../components/Counter'
import Ornamentation from '../../components/Ornamentation'
import Contact from '../../components/Contact'
import Services from '../../components/Services'
import Projects from '../../components/Projects'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      {/* <Companies /> */}
      <How />
      <About />
      <Counter />
      <Services />

      <Ornamentation />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home

import React from 'react'
import styles from './style.module.css'
import ParticlesBg from 'particles-bg'

const Counter = () => {
  return (
    <div className={styles.container}>
      <ParticlesBg type="tadpole" bg={true} />
      <div className={styles.wrapper}>
        <div className={styles.boxe}>
          <h1>+76 Clientes satisfeitos</h1>
          <p>
            9 em cada 10 dos clientes da Kriptotech saem totalmente
            satisfeitos.
          </p>
        </div>
        <div className={styles.boxe}>
          <h1>+80 Serviços feitos</h1>
          <p>A Kriptotech já realizou mais de 80 serviços.</p>
        </div>
        <div className={styles.boxe}>
          <h1>+76 clientes registrados</h1>
          <p>Mais de 76 clientes registrados.</p>
        </div>
        <div className={styles.boxe}>
          <h1>20% Off</h1>
          <p>Kriptotech oferece serviços com 20% de desconto.</p>
        </div>
      </div>
    </div>
  )
}

export default Counter

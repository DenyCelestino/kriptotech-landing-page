import React from 'react'
import styles from './style.module.css'
import Img from '../../assets/ornamentation.png'

const Ornamentation = () => {
  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.wrapper}>
        <div className={styles.image_ornamentation}>
          <img src={Img} />
        </div>
        <div className={styles.ornamentation}>
          <h1>Quanto pagar por um projecto?</h1>
          <p>
            Na nossa empresa, oferecemos a possibilidade de solicitar
            um orçamento personalizado para o seu projeto, com um
            preço acessível e 20% de desconto para o seu primeiro
            pedido. Entendemos que cada projeto é único e estamos
            comprometidos em fornecer soluções personalizadas que
            atendam às suas necessidades e expectativas. Entre em
            contato conosco hoje mesmo e descubra como podemos
            ajudá-lo a concretizar sua ideia!
          </p>
          <button className={styles.pulse_btn}>
            Pedir Orçamento
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ornamentation

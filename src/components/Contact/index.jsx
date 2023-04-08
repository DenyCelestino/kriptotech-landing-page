import React from 'react'
import styles from './style.module.css'
import Img from '../../assets/ornamentation.png'

const Contact = () => {
  return (
    <div id="contact" data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputs_container}>
          <div className={styles.top_inputs_container}>
            <div>
              <label>Nome</label>
              <input placeholder="Digite seu nome" />
            </div>
            <div>
              <label>Email</label>
              <input placeholder="Digite seu email" />
            </div>
          </div>
          <textarea placeholder="Mensagem" />
          <button>Enviar mensagem</button>
        </div>
        <div className={styles.location_container}>
          <div>
            <h4>Nos visite</h4>
            <p>
              Rua de tete, Nampula, Moçambique.
              <br />
              Tel:+258866460507
            </p>
          </div>
          <div>
            <h4>Fale conosco</h4>
            <p>
              Voce pode falar conosco com o email abaixo:
              <br />
              E-mail: smartshopmoznpl@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

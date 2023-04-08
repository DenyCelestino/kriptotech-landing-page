import React from 'react'
import styles from './style.module.css'
import who_us from '../../assets/who.png'
import ParticlesBg from 'particles-bg'

const About = () => {
  return (
    <div id="about" className={styles.container}>
      {/* <ParticlesBg type="color" bg={true} /> */}
      <div className={styles.wrapper}>
        <div data-aos="fade-up" className={styles.image_about}>
          <img src={who_us} />
        </div>

        <div data-aos="fade-down" className={styles.about_container}>
          <h1>SOBRE NÓS</h1>
          <div>
            A Kriptotech é uma empresa derivada da Bantuc plus
            especializada em desenvolver softwares personalizados para
            ajudar empresas a aumentar sua produtividade e eficiência.
            Nosso objetivo é oferecer soluções tecnológicas inovadoras
            e eficazes, que possam ser facilmente integradas às
            rotinas de nossos clientes e otimizar seus processos de
            trabalho. Com anos de experiência no mercado de
            tecnologia, nossa equipe altamente capacitada trabalha em
            estreita colaboração com nossos clientes para entender
            suas necessidades e desafios, oferecendo soluções
            personalizadas e sob medida para cada caso. Nós da
            Kriptotech estamos comprometidos em fornecer serviços de
            alta qualidade e ajudar nossos clientes a alcançar seus
            objetivos de negócios, utilizando tecnologia de ponta para
            melhorar a eficiência e a produtividade em suas
            atividades. Se você está procurando soluções inovadoras
            para melhorar a produtividade de sua empresa, conte
            conosco.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

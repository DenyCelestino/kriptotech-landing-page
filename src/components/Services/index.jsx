import React from 'react'
import styles from './style.module.css'
import websites from '../../assets/websites.png'
import mobileapp from '../../assets/mobileapp.png'
import softwares from '../../assets/softwares.png'

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      id="services"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <h1>Serviços</h1>
        <p>
          Oferecemos soluções tecnológicas sob medida para sua
          empresa, desde o desenvolvimento de softwares responsivos
          até a implementação de projetos personalizados. Nossa equipe
          altamente capacitada está pronta para atender às suas
          necessidades e ajudá-lo a alcançar seus objetivos de
          negócios com tecnologia de ponta e soluções inovadoras.
        </p>
        <div className={styles.services}>
          <div data-aos="flip-left" className={styles.box}>
            <img src={websites} />
            <h4>Desenvolvimento de websites</h4>
            <p>
              Na nossa empresa, oferecemos serviços de desenvolvimento
              de websites sob medida para atender às suas necessidades
              e objetivos. Com uma equipe altamente capacitada e
              tecnologia de ponta, estamos comprometidos em fornecer
              soluções personalizadas e eficazes para aumentar sua
              presença online e alavancar seu negócio. Entre em
              contato conosco e descubra como podemos ajudá-lo a criar
              um website profissional e impactante!
            </p>
          </div>
          <div data-aos="flip-left" className={styles.box}>
            <img src={mobileapp} />
            <h4>Desenvolvimento de aplicativos Moveis</h4>
            <p>
              Transforme sua ideia em um aplicativo móvel de sucesso!
              Oferecemos serviços de desenvolvimento de aplicativos
              para Android e iOS, criando soluções personalizadas para
              atender às suas necessidades específicas. Nossa equipe
              altamente qualificada e experiente trabalha em estreita
              colaboração com você para garantir que seu aplicativo
              móvel tenha o visual e a funcionalidade que você deseja!
            </p>
          </div>
          <div data-aos="flip-left" className={styles.box}>
            <img src={softwares} />
            <h4>Desenvolvimento de softwares</h4>
            <p>
              Nós a Kriptotech estamos prontos para criar softwares
              responsivos que se adaptem a todas as plataformas,
              oferecendo aos nossos clientes uma experiência de
              usuário excepcional. Seja em um computador, tablet ou
              smartphone, seu software estará sempre acessível e
              funcional. Conte conosco para desenvolver soluções
              personalizadas que atendam às suas necessidades e
              requisitos técnicos!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

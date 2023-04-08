import React from 'react'
import styles from './style.module.css'
import {
  IoLogoGooglePlaystore,
  IoLogoAppleAppstore
} from 'react-icons/io5'
import { TbWorldWww } from 'react-icons/tb'

const projects = [
  {
    name: 'SMARTSHOP',
    description:
      'A Smartshop é um Super Mercado Virtual, com vista a incubação de diversas entidades de venda, este dedicado especialmente á Moçambique, com objectivo principal de trazer produtos de forma eficiente, fácil e rápida ao usuário , poupando 95% dos esforços ,possibilitando a indexação e entrega ao domicílio mediante a sua escolha de entrega.',
    googleplay:
      'https://play.google.com/store/apps/details?id=com.bantucplus.smartshop',
    web: 'https://smshop.store',
    appstore: null,
    image: require('../../assets/smartshopapp.png')
  },
  {
    name: 'IFOUND',
    description:
      'Ifound é uma plataforma online de gestão de documentos perdidos e encontrados. O seu principal objectivo e a facilitação do retorno de um objecto encontrado através de nossa plataforma ifound, desde que o objecto encontrado tenha sido registrado online. ',
    googleplay:
      'https://play.google.com/store/apps/details?id=com.bantucplus.ifound',
    web: null,
    appstore: null,
    image: require('../../assets/ifound.png')
  },
  {
    name: 'EINSROCKET',
    description:
      'Somos uma plataforma completa de aprendizado continuo em ingles,O mapa completo para guiar-te na evolução do seu aprendizado de ingles e acessar novas oportunidades na sua vida. Aprenda com a nossa ajuda e ganhe proficiencia em ingles.',
    googleplay: null,
    web: 'https://einsrocket.netlify.app',
    appstore: null,
    image: require('../../assets/einsrocketapp.png')
  },
  {
    name: 'MINUTAX',
    description:
      'Com nosso site, preencher minutas de instituições nunca foi tão fácil! Nossa interface de usuário intuitiva e nosso formulário simples tornam todo o processo rápido e fácil.',
    googleplay:
      'https://play.google.com/store/apps/details?id=com.bantucplus.smartshop',
    web: 'https://minutax.fun',
    appstore: null,

    image: require('../../assets/minutaxapp.png')
  },

  {
    name: 'PAYFLOAT',
    description:
      'Surpresa: a fórmula do dinheiro ideal envolve tirar o humano da equação,Bancos e governos protegem o seu dinheiro de imprevistos. A Playfloat protege seu dinheiro dos três.',
    googleplay: null,
    web: 'https://payfloat.co.mz',
    appstore: null,
    image: require('../../assets/payfloat.png')
  }
]

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      id="projects"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <h1>Projectos</h1>
        <p>
          Temos projectos públicos e privados realizados por nossa
          empresa. Privados nao expostos por motivos de privacidade,
          nem todos os nossos projetos privados podem ser exibidos
          publicamente. Mas não se preocupe, nossa equipe está sempre
          pronta para discutir soluções personalizadas para atender às
          suas necessidades específicas. Entre em contato conosco hoje
          mesmo para saber mais..
        </p>
        <div className={styles.projects}>
          {projects.map((item, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className={styles.box}
            >
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.description}!</p>

              <div className={styles.social_media}>
                {item.googleplay && (
                  <a target="_blank" href={item.googleplay}>
                    <IoLogoGooglePlaystore size={24} />{' '}
                  </a>
                )}
                {item.web && (
                  <a target="_blank" href={item.web}>
                    <TbWorldWww size={24} />
                  </a>
                )}
                {item.appstore && (
                  <a target="_blank" href={item.appstore}>
                    <IoLogoAppleAppstore size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

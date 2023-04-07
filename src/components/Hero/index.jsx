import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin
} from 'react-icons/ai'
import ParticlesBg from 'particles-bg'

const Hero = () => {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollEvent = window.pageYOffset
      setScrolled(scrollEvent > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container}>
      {/* <ParticlesBg type="color" bg={true} /> */}

      <div data-aos="fade-up-right" className={styles.wrapper}>
        <h1>
          Transformando a sociedade <br />
          por meio da tecnologia{' '}
        </h1>
        <span>
          Nossos softwares são projetados para tornar o mundo um lugar
          melhor <br />e mais sustentável para todos por intermedio da
          tecnologia.
        </span>
        <div className={styles.subscribe_container}>
          <input
            placeholder="Digite seu email"
            className={styles.email_subscribe}
          />
          <button>Subcrever</button>
        </div>
      </div>
      <div
        style={{ display: isScrolled && 'none' }}
        className={styles.social_network_media}
      >
        <AiFillFacebook className={styles.medias_icons} size={20} />
        <AiFillInstagram className={styles.medias_icons} size={20} />
        <AiFillLinkedin className={styles.medias_icons} size={20} />
      </div>
    </div>
  )
}

export default Hero

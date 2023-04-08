import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import Logo from '../../assets/logo.png'
import { Fade } from 'react-reveal'
const Header = () => {
  const [isScrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  function MobileNav() {
    setMobileNav(!mobileNav)
  }
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
    <nav
      style={{ backgroundColor: isScrolled && 'black' }}
      className={styles.container}
    >
      <div className={styles.logo_container}>
        <img
          onClick={() => scrollToSection('hero')}
          alt="Logotipo da kriptotech"
          className={styles.logo}
          src={Logo}
        />
      </div>

      <div className={styles.wrapper}>
        <ul className={styles.link_container}>
          <li>
            <Link onClick={() => scrollToSection('hero')}>
              Pagina Inicial
            </Link>
          </li>
          <li>
            <Link onClick={() => scrollToSection('about')}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link onClick={() => scrollToSection('how')}>
              Como funcionamos
            </Link>
          </li>
          <Link onClick={() => scrollToSection('services')}>
            Serviços
          </Link>
          <li>
            <Link onClick={() => scrollToSection('contact')}>
              Fale conosco
            </Link>
          </li>
          <li>
            <Link onClick={() => scrollToSection('projects')}>
              Projectos
            </Link>
          </li>
        </ul>
        <div className={styles.button_container}>
          <button>Pedir Orçamento</button>
          <button>Contactar</button>
        </div>
      </div>
      {mobileNav ? (
        <IoCloseSharp
          className={styles.mobileCloseButtons}
          onClick={MobileNav}
          size={30}
        />
      ) : (
        <BiMenuAltRight
          className={styles.mobileCloseButtons}
          onClick={MobileNav}
          size={30}
        />
      )}
      {/* mobile nav */}
      {mobileNav && (
        <Fade left>
          <div className={styles.wrapper_mobile}>
            <ul className={styles.link_container_mobile}>
              <div className={styles.button_container}>
                <button>Pedir Orçamento</button>
                <button>Contactar</button>
              </div>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('hero', setMobileNav(false))
                  }
                >
                  Pagina Inicial
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('about', setMobileNav(false))
                  }
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('how', setMobileNav(false))
                  }
                >
                  Como funcionamos
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('services', setMobileNav(false))
                  }
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('contact', setMobileNav(false))
                  }
                >
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    scrollToSection('projects', setMobileNav(false))
                  }
                >
                  Projectos
                </Link>
              </li>
            </ul>
          </div>
        </Fade>
      )}
    </nav>
  )
}

export default Header

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
          alt="Logotipo da kriptotech"
          className={styles.logo}
          src={Logo}
        />
      </div>

      <div className={styles.wrapper}>
        <ul className={styles.link_container}>
          <li>
            <Link>Pagina Inicial</Link>
          </li>
          <li>
            <Link>Sobre nós</Link>
          </li>
          <li>
            <Link>Missão</Link>
          </li>
          <li>
            <Link>Visão</Link>
          </li>
          <li>
            <Link>Contacto</Link>
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
        <Fade right>
          <div className={styles.wrapper_mobile}>
            <ul className={styles.link_container_mobile}>
              <div className={styles.button_container}>
                <button>Pedir Orçamento</button>
                <button>Contactar</button>
              </div>
              <li>
                <Link>Pagina Inicial</Link>
              </li>
              <li>
                <Link>Sobre nós</Link>
              </li>
              <li>
                <Link>Missão</Link>
              </li>
              <li>
                <Link>Visão</Link>
              </li>
              <li>
                <Link>Contacto</Link>
              </li>
            </ul>
          </div>
        </Fade>
      )}
    </nav>
  )
}

export default Header

import React from 'react'
import styles from './style.module.css'
import Google from '../../assets/google.png'
import spotify from '../../assets/spotify.png'
import ibm from '../../assets/ibm.png'
import rocketseat from '../../assets/rocketseat.png'
import Smartshop from '../../assets/smartshop.png'
import Einsrocket from '../../assets/einsrocket.png'

import Zoom from 'react-reveal/Zoom'

const Companies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companies}>
        {/* <div className={styles.companie_container}>
        <img src={Smartshop} />
        <h4>Smartshop</h4>
      </div>
      <div className={styles.companie_container}>
        <img src={Einsrocket} />
        <h4>Smartshop</h4>
      </div> */}
        <Zoom>
          <div className={styles.companie_container}>
            <img src={Google} />
            <h4>Google</h4>
          </div>
          <div className={styles.companie_container}>
            <img src={spotify} />
            <h4>Spotify</h4>
          </div>
          <div className={styles.companie_container}>
            <img src={ibm} />
            <h4>IBM</h4>
          </div>
          <div className={styles.companie_container}>
            <img src={rocketseat} />
            <h4>Rocketseat</h4>
          </div>
        </Zoom>

        {/* <img src={Minutax} /> */}
      </div>
    </div>
  )
}

export default Companies

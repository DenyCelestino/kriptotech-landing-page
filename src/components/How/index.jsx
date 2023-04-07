import React from 'react'
import styles from './style.module.css'
import timetag from '../../assets/timetag.png'
import qualitytag from '../../assets/qualitytag.png'
import appexample from '../../assets/appexample.png'
import handshaketag from '../../assets/handshaketag.png'
import excellentag from '../../assets/excellentag.png'
import dedicationtag from '../../assets/dedicationtag.png'
import inovationtag from '../../assets/inovationtag.png'
import eficientag from '../../assets/eficientag.png'
import satisfytag from '../../assets/satisfytag.png'

const How = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div data-aos="fade-down" className={styles.how_slogan}>
          <h1 className={styles.how_work}>Como funcionamos ?</h1>
          <p>
            Oferecemos soluções personalizadas de software e
            aplicativos para ajudar a simplificar a gestão do seu
            negócio e aumentar a sua produtividade.
          </p>
        </div>

        <div className={styles.features}>
          {/* tags left */}
          <div className={styles.tags_left}>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>RAPIDEZ</h4>
                <p>
                  O tempo é um recurso valioso, e na nossa empresa,
                  entendemos a importância de responder rapidamente às
                  necessidades dos nossos clientes
                </p>
              </div>
              <img src={timetag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Qualidade</h4>
                <p>
                  Colocamos a qualidade em primeiro lugar em tudo o
                  que fazemos para garantir o sucesso de nossos
                  clientes.
                </p>
              </div>
              <img src={qualitytag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Comprometimento</h4>
                <p>
                  Estamos comprometidos em fornecer serviços de alta
                  qualidade que ajudem nossos clientes a alcançar seus
                  objetivos de negócios.
                </p>
              </div>
              <img src={handshaketag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Excelência</h4>
                <p>
                  Buscamos a excelência em cada etapa do processo de
                  desenvolvimento de software e aplicativos.
                </p>
              </div>
              <img src={excellentag} />
            </div>
          </div>

          {/* image middle */}
          <div className={styles.image_middle}>
            <button>Começar</button>
            <img data-aos="flip-left" src={appexample} />
          </div>

          {/* right tags */}
          <div className={styles.tags_right}>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Dedicação</h4>
                <p>
                  Nossa equipe é dedicada a fornecer soluções
                  personalizadas e sob medida para cada cliente.
                </p>
              </div>
              <img src={dedicationtag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Inovação</h4>
                <p>
                  Estamos sempre buscando maneiras inovadoras de
                  ajudar nossos clientes a se destacar em seus
                  mercados.
                </p>
              </div>
              <img src={inovationtag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Eficiência</h4>
                <p>
                  Nossa abordagem de desenvolvimento de software e
                  aplicativos visa melhorar a eficiência e a
                  produtividade de nossos clientes.
                </p>
              </div>
              <img src={eficientag} />
            </div>
            <div data-aos="flip-down" className={styles.tags}>
              <div className={styles.tags_info}>
                <h4>Satisfação do cliente</h4>
                <p>
                  A satisfação do cliente é fundamental para o sucesso
                  de nossa empresa e para o sucesso de nossos
                  clientes.
                </p>
              </div>
              <img src={satisfytag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How

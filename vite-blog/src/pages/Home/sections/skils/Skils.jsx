import { useEffect, useRef } from 'react'
import Scroll from '../../../../components/ui/scrolImg/Scroll'
import style from './skils.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skils = () => {

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Прячем элементы перед стартом (фикс белого экрана)
    gsap.set([headingRef.current, ...cardsRef.current], {
      opacity: 0,
      y: 50
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    // Заголовок
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out"
    })

    // Карточки
    tl.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")

  }, [])

  return (
    <section id='skills' ref={sectionRef}  className={style.skils}>
      <Scroll  />

      <div className={style.skilsBlock}>
        <div className="container">

          {/* Заголовок */}
          <div ref={headingRef} className={style.skilsBlockHeading}>
            <h2 className={style.skilsHeading}>Skills</h2>
            <img src="./line.svg" alt="" />
            <p className={style.skilsParag}>
              I am striving to never stop learning and improving
            </p>
          </div>

          {/* Верхние карточки */}
          <div  className={style.skilsBlockWork}>
            <div ref={el => cardsRef.current[0] = el} className={style.skilsBlockWorkWeb}>
              <img src="./Icons/monitor-skils.svg" alt="" />
              <h3 className={style.skilsBlockWorkWebHeading}>web developement</h3>
              <p className={style.skilsBlockWorkWebParag}>HTML·CSS·JS·REACT</p>
            </div>

            <div ref={el => cardsRef.current[1] = el} className={style.skilsBlockWorkApp}>
              <img src="./Icons/smartphone-skils.svg" alt="" />
              <h3 className={style.skilsBlockWorkAppHeading}>web developement</h3>
              <p className={style.skilsBlockWorkAppParag}>HTML·CSS·JS·REACT</p>
            </div>
          </div>

          <div className={style.skilsBlockWorkImage}>
            <div ref={el => cardsRef.current[2] = el} className={style.skilsBlockWorkImageItem}>
              <img src="./html.png" alt="HTML" />
              <p className={`${style.skillText} ${style.html}`}>HTML</p>
            </div>

            <div ref={el => cardsRef.current[3] = el} className={style.skilsBlockWorkImageItem}>
              <img src="./css.png" alt="CSS" />
              <p className={`${style.skillText} ${style.css}`}>CSS</p>
            </div>

            <div ref={el => cardsRef.current[4] = el} className={style.skilsBlockWorkImageItem}>
              <img src="./js.png" alt="JavaScript" />
              <p className={`${style.skillText} ${style.js}`}>JS</p>
            </div>

            <div ref={el => cardsRef.current[5] = el} className={style.skilsBlockWorkImageItem}>
              <img src="./react.png" alt="React" />
              <p className={`${style.skillText} ${style.react}`}>REACT</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skils

import React, { useEffect, useRef } from 'react'
import style from './about.module.scss'
import Scroll from '../../../../components/ui/scrolImg/Scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    // Сразу скрываем — фикс бага перезагрузки
    gsap.set([leftRef.current, rightRef.current], {
      opacity: 0
    })

    gsap.set(leftRef.current, { x: -80 })
    gsap.set(rightRef.current, { x: 80 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",   // когда блок доходит до 75% экрана
        toggleActions: "play none none reverse"
      }
    })

    tl.to(leftRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out"
    })

    tl.to(rightRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out"
    }, "-=0.7")

  }, [])

  return (
    <section ref={sectionRef} id='about' className={style.about}>
      <div className="container">
        <Scroll />

        <div className={style.container}>
          <div className={style.aboutBlock}>

            {/* Левая часть */}
            <div ref={leftRef} className={style.aboutBlockLeft}>
              <h2 className={style.aboutBlockLeftHeading}>
                About me
              </h2>

              <div className={style.aboutBlockLeftText}>
                <span className={style.aboutBlockLeftSpan}>&lt;p&gt;</span>

                <div className={style.aboutBlockLeftTextBlock}>
                  <p className={style.aboutText}>
                    <span className={style.aboutHello}>Hello!</span>
                  </p>

                  <p className={style.aboutText}>
                    My name is Askhab and I specialize in web development that utilizes HTML, CSS, JS, and REACT, etc.
                  </p>

                  <p className={style.aboutText}>
                    I am a highly motivated individual and an eternal optimist, dedicated to writing clear, concise, and robust code that works. I strive to never stop learning and improving.
                  </p>

                  <p className={style.aboutText}>
                    When I'm not coding, I am writing blogs, reading, or picking up a new hands-on art project like photography.
                  </p>

                  <p className={style.aboutText}>
                    I like to have my perspective and belief systems challenged so that I can see the world through new eyes.
                  </p>
                </div>

                <span className={style.aboutBlockLeftSpan}>&lt;/p&gt;</span>
              </div>
            </div>

            {/* Правая картинка */}
            <div ref={rightRef} className={style.aboutBlockRightImg}>
              <img src="./about-img.png" alt="" />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About

import { useRef, useState, useLayoutEffect } from "react"
import emailjs from "emailjs-com"
import style from "./contact.module.scss"
import Scroll from "../../../../components/ui/scrolImg/Scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const formRef = useRef(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const btnRef = useRef(null)

  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_md419ox",
      "template_g2bin9s",
      formRef.current,
      "fYJn4VfJk-eOXYJ1L"
    ).then(
      () => setSent(true),
      (error) => console.error(error)
    )
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ===== SPLIT TEXT TO LETTERS ===== */
      const text = headingRef.current
      const letters = text.innerText.split("")
      text.innerHTML = letters
        .map(l => `<span class="char">${l === " " ? "&nbsp;" : l}</span>`)
        .join("")

      const chars = text.querySelectorAll(".char")

      /* ===== INITIAL STATE ===== */
      gsap.set(chars, {
        opacity: 0,
        y: 40,
        rotate: -10
      })

      gsap.set(".contact-input", {
        opacity: 0,
        y: 30,
        scale: 0.9
      })

      gsap.set(btnRef.current, {
        opacity: 0,
        scale: 0.8
      })

      /* ===== TIMELINE ===== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })

      /* ===== LETTER ANIMATION ===== */
      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.7)"
      })

      /* ===== INPUTS CASCADE ===== */
      tl.to(".contact-input", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power4.out"
      }, "-=0.2")

      /* ===== BUTTON ===== */
      tl.to(btnRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className={style.contact}>
      <Scroll />

      <div className={style.contactBlock}>
        <div className="container">

          {/* ===== HEADING ===== */}
          <div className={style.contactBlockHeadnig}>
            <h2 ref={headingRef} className={style.contactHeading}>
              Contact
            </h2>
            <img src="./line.svg" alt="" />
            <p className={style.contactHeadingParag}>
              I’m currently available for freelance work
            </p>
          </div>

          {/* ===== FORM ===== */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={style.contactSendMess}
          >
            <h2 className={style.contactSendMessHeading}>
              Send Me A Message
            </h2>

            <div className={style.contactSendMessInputs}>

              <div className={style.contactSendMessInputsBlock}>
                <p className={style.contactSendMessInputsParag}>
                  Your name *
                </p>
                <input
                  className={`${style.contactSendMessInputsName} contact-input`}
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={style.contactSendMessInputsBlock}>
                <p className={style.contactSendMessInputsParag}>
                  Your email *
                </p>
                <input
                  className={`${style.contactSendMessInputsEmail} contact-input`}
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={style.contactSendMessInputsBlock}>
                <p className={style.contactSendMessInputsParag}>
                  Your message *
                </p>
                <textarea
                  className={`${style.contactSendMessInputsMessage} contact-input`}
                  name="message"
                  placeholder="Enter your needs"
                  required
                />
              </div>

            </div>

            <button
              ref={btnRef}
              type="submit"
              className={style.contactSendMessBtn}
            >
              Send Message <img src="./Icons/send.svg" alt="" />
            </button>

            {sent && (
              <p style={{ color: "#12f7d6", marginTop: "16px" }}>
                Message sent successfully!
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact

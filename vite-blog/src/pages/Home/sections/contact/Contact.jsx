import { useRef, useState, useLayoutEffect } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import style from "./contact.module.scss";
import Scroll from "../../../../components/ui/scrolImg/Scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const recaptchaRef = useRef(null);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [verified, setVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot check
    if (formRef.current.honeypot.value) return;

    // Rate limiting
    if (cooldown) return;

    // reCAPTCHA check
    if (!verified) {
      alert("Please verify that you are human!");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_md419ox",
        "template_g2bin9s",
        formRef.current,
        "fYJn4VfJk-eOXYJ1L"
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          formRef.current.reset();
          setVerified(false);
          recaptchaRef.current.reset();

          // Rate limiting: 30 секунд
          setCooldown(true);
          setTimeout(() => setCooldown(false), 30000);
        },
        (error) => {
          console.error(error);
          setSending(false);
        }
      );
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const text = headingRef.current;
      const letters = text.innerText.split("");
      text.innerHTML = letters
        .map((l) => `<span class="char">${l === " " ? "&nbsp;" : l}</span>`)
        .join("");

      const chars = text.querySelectorAll(".char");

      gsap.set(chars, {
        opacity: 0,
        y: 40,
        rotate: -10,
      });

      gsap.set(".contact-input", {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      gsap.set(btnRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      tl.to(
        ".contact-input",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power4.out",
        },
        "-=0.2"
      );

      tl.to(btnRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
                <p className={style.contactSendMessInputsParag}>Your name *</p>
                <input
                  className={`${style.contactSendMessInputsName} contact-input`}
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={style.contactSendMessInputsBlock}>
                <p className={style.contactSendMessInputsParag}>Your email *</p>
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

              {/* ===== Honeypot field ===== */}
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                autoComplete="off"
              />
            </div>

            {/* ===== reCAPTCHA ===== */}
            <ReCAPTCHA
              sitekey="6LcY_lcsAAAAAL0dKTcJMeAGlhCpVOa5CCMi22nT"
              ref={recaptchaRef}
              onChange={() => setVerified(true)}
            />

            {/* ===== BUTTON ===== */}
            <button
              ref={btnRef}
              type="submit"
              className={style.contactSendMessBtn}
              disabled={sending || !verified || cooldown}
            >
              {sending ? "Sending..." : "Send Message"}{" "}
              <img src="./Icons/send.svg" alt="" />
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
  );
};

export default Contact;

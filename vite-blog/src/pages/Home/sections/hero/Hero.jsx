import React, { useEffect, useRef } from 'react'
import style from './hero.module.scss'
import Sidebar from '../../../../components/sidebar/Sidebar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

	const sectionRef = useRef(null)
	const headingRef = useRef(null)
	const leftRef = useRef(null)
	const centerRef = useRef(null)
	const bottomRef = useRef(null)

	const scrollContact = (id) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {

		gsap.set(
			[
				headingRef.current,
				leftRef.current,
				centerRef.current,
				bottomRef.current
			],
			{ opacity: 0, y: 60 }
		)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top 70%',
				toggleActions: 'play none none reverse'
			}
		})

		tl.to(headingRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power4.out'
		})

		tl.to(leftRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power4.out'
		}, '-=0.4')

		tl.to(centerRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power4.out'
		}, '-=0.4')

		tl.to(bottomRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power4.out'
		}, '-=0.4')

	}, [])

	return (
		<section ref={sectionRef} className={style.sectionHero}>
			<div className="container">
				<hr className={style.sectionHeroHr} />
				<Sidebar />

				<div className={style.heroBlock}>
					<h1 ref={headingRef} className={style.heroBlockHeading}>
						Developer
					</h1>

					<div className={style.container}>
						<div className={style.heroBlockDeveloperInfo}>

							<div ref={leftRef} className={style.heroBlockInfo}>
								<div className={style.heroBlockInfoPerson}>
									<img className={style.heroBlockInfoAvatar} src="./Icons/Profile.svg" alt="avatar" />
									<p className={style.heroBlockInfoPersonName}>Askhab</p>
									<p className={style.heroBlockInfoPersonJob}>Front-end developer</p>
								</div>

								<div className={style.heroBlockInfoAbout}>
									<p className={style.heroBlockInfoAboutParagraph}>
										<img src="./Icons/mail.svg" alt="email" />
										nikitovich60@bk.ru
									</p>
									<p className={style.heroBlockInfoAboutParagraph}>
										<img src="./Icons/map.svg" alt="city" />
										Moscow
									</p>
									<p className={style.heroBlockInfoAboutParagraph}>
										<img src="./Icons/briefcase.svg" alt="job" />
										Full-time / Freelancer
									</p>
									<p className={style.heroBlockInfoAboutParagraph}>
										<img src="./Icons/link.svg" alt="site" />
										yusprog.com
									</p>
								</div>

								<div className={style.heroBlockInfoSkill}>
									<p className={style.heroBlockInfoSkillParag}>HTML</p>
									<p className={style.heroBlockInfoSkillParag}>CSS</p>
									<p className={style.heroBlockInfoSkillParag}>JS</p>
									<p className={style.heroBlockInfoSkillParag}>REACT</p>
								</div>

								<a
									href="./Cv.pdf"
									download="Askhab_CV.pdf"
									className={style.heroBlockBtn}
								>
									Download CV
									<img src="./Icons/download.svg" alt="" />
								</a>
							</div>
							<div ref={centerRef} className={style.heroBlockDeveloper}>
								<div className={style.heroBlockDeveloperHedingBlock}>
									<div className="heroBlockDeveloperHedingBlockText">
										<span className={style.heroBlockDeveloperSpanStart}>&lt;h1&gt;</span>
										<h2 className={style.heroBlockDeveloperHeading}>
											Hey <br /> I’m <span className={style.heroBlockDeveloperHeadingSpan}>Askhab</span>, <br />
											Front-end developer
											<span className={style.heroBlockDeveloperSpanClose}>&lt;/h1&gt;</span>
										</h2>
									</div>

									<div className={style.heroBlockDeveloperParagraphBlock}>
										<span className={style.heroBlockDeveloperParagraphSpan}>&lt;p&gt;</span>
										<p className={style.heroBlockDeveloperParagraph}>
											I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
										</p>
										<span className={style.heroBlockDeveloperParagraphSpan}>&lt;/p&gt;</span>

										<button
											onClick={() => scrollContact('contact')}
											className={style.heroBlockDeveloperParagraphBtn}
										>
											Let's Talk <img src="./Icons/button-mail.svg" alt="mail icon" />
										</button>
									</div>
								</div>
								<div ref={bottomRef} className={style.heroBlockDeveloperSkils}>
									<p className={style.heroBlockDeveloperSkilsParag}>
										<span className={style.heroBlockDeveloperSkilsSpan}>4</span>
										Programming Language
									</p>
									<p className={style.heroBlockDeveloperSkilsParag}>
										<span className={style.heroBlockDeveloperSkilsSpan}>6</span>
										Development Tools
									</p>
									<p className={style.heroBlockDeveloperSkilsParag}>
										<span className={style.heroBlockDeveloperSkilsSpan}>8</span>
										Years of Experience
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Hero

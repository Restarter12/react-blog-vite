import React from 'react'
import style from './sidebar.module.scss'

const Sidebar = () => {

	const scrollSection = (id) => {
		const section = document.getElementById(id)
		if(section){
			section.scrollIntoView({behavior: 'smooth'})
		}
	}

	return (
		<div className={style.sidebar}>
			<button onClick={() => scrollSection('hero')}>
				<img src="./Icons/grid.svg" alt="grid" />
				<img src="./Icons/grid-black.svg" alt="grid-black" />
			</button>
			<button onClick={() => scrollSection('about')}>
				<img src="./Icons/user.svg" alt="" />
				<img src="./Icons/user-black.svg" alt="" />

			</button>
			<button onClick={() => scrollSection('skills')}>
				<img src="./Icons/code.svg" alt="" />
				<img src="./Icons/code-black.svg" alt="" />

			</button>
			<button onClick={() => scrollSection('blog')}>
				<img src="./Icons/edit.svg" alt="" />
				<img src="./Icons/edit-black.svg" alt="" />

			</button>
			<button onClick={() => scrollSection('contact')}>
				<img src="./Icons/mailSidebar.svg" alt="" />
				<img src="./Icons/mail-black.svg" alt="" />

			</button>
		</div>
	)
}

export default Sidebar

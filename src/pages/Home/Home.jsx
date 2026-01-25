import React from 'react'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Skils from './sections/skils/Skils'
import Blog from './sections/works/Blog'
import Contact from './sections/contact/Contact'


const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<Skils />
			<Blog />
			<Contact />
		</div>
	)
}

export default Home

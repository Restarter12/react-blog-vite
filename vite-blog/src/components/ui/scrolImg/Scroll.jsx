import style from './scroll.module.scss'

const Scroll = () => {
	return (
		<div className={style.scrollImage}>
			<img className={style.scrollImg} src="./scroll.png" alt="scroll" />
		</div>
	)
}

export default Scroll

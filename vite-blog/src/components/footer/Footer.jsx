import style from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<hr className={style.footerLine} />
			<div className="container">

				<div className={style.footerBlock}>
					<p className={style.footerBlockParag}>© 2023 SinanTokmak. All rights reserved.</p>
					<ul className={style.footerBlockList}>
						<li><a className={style.footerBlockItem} href="">Privacy Policy</a></li>
						<li><a className={style.footerBlockItem} href="">Terms & Conditions</a></li>
					</ul>
					<div className={style.footerLink}>
						<a href="https://www.instagram.com/yusprog?igsh=anE4cWtodWoyeWR4&utm_source=qr" target='_blank'>
							<img src="./Instagram.svg" alt="" />
						</a>
						<a href="https://github.com/Restarter12?tab=repositories" target='_blank'>
							<img src="./Github.svg" alt="" />
						</a>
					</div>
					<p className={style.footerBlockParag}>
						Developed By Askhab
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

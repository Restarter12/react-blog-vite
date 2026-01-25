import { Link } from "react-router-dom"
import style from "./header.module.scss"
import { memo } from "react"
import SearchInput from "../ui/InputSearch/SearchInput.jsx"

const Logo = memo(() => (
  <div className={style.headerLogo}>
    <Link to="/" className={style.headerLogoParagraph}>
      <span className={style.headerLogoSpan}>C/</span>
      AskhabYusupov
    </Link>
  </div>
))

const NavLinks = memo(() => (
  <div className={style.headerNavLinkBtn}>
    <Link className={style.headerNavA} to="/">Home</Link>
    <Link className={style.headerNavA} to="/blog">Blogs</Link>
  </div>
))

const Socials = memo(() => (
  <div className={style.headerNavLink}>
    <a target="_blank" href="https://www.instagram.com/yusprog" className={style.headerNavLinkA}>
      <img src="./Icons/instagram.svg" alt="" /> Instagram
    </a>
    <a target="_blank" href="https://github.com/Restarter12" className={style.headerNavLinkA}>
      <img src="./Icons/github.svg" alt="" /> Github
    </a>
  </div>
))

const Header = () => {
  return (
    <header id='hero' className={style.header}>
      <div className="container">
        <div className={style.headerBlock}>
          <Logo />

          <div className={style.headerNav}>
            <NavLinks />
            <SearchInput />
            <Socials />
          </div>

        </div>
      </div>
    </header>
  )
}

export default memo(Header)

import { useEffect, useState, useRef } from "react"
import { supabase } from "../../../../supabase"
import style from './blog.module.scss'
import Scroll from '../../../../components/ui/scrolImg/Scroll'
import { Link } from 'react-router-dom'
import PostItem from '../../../../components/ui/post/PostItem'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
  const [latestPost, setLatestPost] = useState(null)

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const contentRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    async function fetchLatestPost() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)

      if (error) {
        console.error(error)
      } else {
        setLatestPost(data[0]) 
      }
    }

    fetchLatestPost()
  }, [])

  useEffect(() => {
    if (!latestPost) return

    // Скрываем элементы перед анимацией
    gsap.set([headingRef.current, contentRef.current, btnRef.current], {
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

    // Анимация заголовка
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out"
    })

    // Анимация контента (поста)
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")

    // Анимация кнопок
    tl.to(btnRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out"
    }, "-=0.4")
  }, [latestPost])

  if (!latestPost) return <p>Loading...</p>

  return (
    <section id='blog' ref={sectionRef} className={style.blog}>
      <Scroll />
      <div  className={style.blogBlock}>
        <div className="container">
          <div ref={headingRef} className={style.blogHeadingBlock}>
            <h2 className={style.blogHeading}>Blogs</h2>
            <img src="./line.svg" alt="" />
            <p className={style.blogParag}>
              My thoughts on technology and business, welcome to subscribe
            </p>
          </div>

          <div ref={contentRef} className={style.blogContent}>
            <hr />
            <PostItem post={latestPost} />
            <hr />
          </div>

          <div ref={btnRef} className={style.blogBtn}>
            <Link to={'/blog'}>
              <button className={style.blogBtnMore}>View More</button>
            </Link>
            <button className={style.blogBtnSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

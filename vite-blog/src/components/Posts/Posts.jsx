import React, { useEffect, useState, useMemo } from "react"
import { supabase } from "../../supabase"
import style from './posts.module.scss'
import PostItem from '../ui/post/PostItem'

const Posts = ({ searchTerm = "" }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error) setPosts(data)
    }

    loadPosts()
  }, [])

  const filteredPosts = useMemo(() => {
    const words = searchTerm
      .toLowerCase()
      .trim()
      .split(" ")
      .filter(Boolean)

    if (words.length === 0) return posts

    return posts.filter(post => {
      const text = (
        post.title +
        " " +
        post.description +
        " " +
        post.content +
        " " +
        post.theme
      ).toLowerCase()

      return words.every(word => text.includes(word))
    })
  }, [posts, searchTerm])

  return (
    <div className={style.posts}>
      <div className={style.postsBlockHeading}>
        <h2 className={style.postsHeading}>Blogs</h2>
        <img src="./line.svg" alt="" />
        <p className={style.postsHeadingParag}>
          My thoughts on technology and business, welcome to subscribe
        </p>
      </div>

      <div className={style.buttonWrapper}>
        <button className={style.postsBlockBtn}>Subscribe My Blogs</button>
      </div>

      {filteredPosts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts

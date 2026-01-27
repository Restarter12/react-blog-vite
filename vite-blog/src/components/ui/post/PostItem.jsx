import React, { memo } from "react"
import style from './postItem.module.scss'
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
  const truncateText = (text, maxLength = 70) => {
    if (!text) return ""
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
  }
  return (
    <div className={style.postsBlock}>
      <div className={style.postsBlockBlog}>
        <img src={post.image_url} width="240" height="240" alt={post.title} />
        <div className={style.postsBlockText}>
          <h2 className={style.postsBlockTextHeading}>{post.title}</h2>
          <p className={style.postsBlockTextParag}>
            {truncateText(post.content)}
          </p>
          <Link className={style.postBlockLink} to={`/blogdetail/${post.id}`}>Read More &gt;&gt;</Link>
          <div className={style.postsBlockTag}>
            <p className={style.postsTheme}>{post.theme}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(PostItem)

import React, { memo } from "react"
import style from './postItem.module.scss'

const PostItem = ({ post }) => {
  return (
    <div className={style.postsBlock}>
      <div className={style.postsBlockBlog}>
        <img src={post.image_url} width="240" height="240" alt={post.title} />
        <div className={style.postsBlockText}>
          <h2 className={style.postsBlockTextHeading}>{post.title}</h2>
          <p className={style.postsBlockTextParag}>{post.content}</p>
          <a href="">Read More &gt;&gt;</a>
          <div className={style.postsBlockTag}>
            <p className={style.postsTheme}>{post.theme}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(PostItem)

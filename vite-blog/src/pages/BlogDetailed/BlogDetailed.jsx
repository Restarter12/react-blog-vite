import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../../supabase"
import style from './blogDetail.module.scss'
import PostItem from '../../components/ui/post/PostItem'

const BlogDetailed = () => {
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const [otherPosts, setOtherPosts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchPost() {
			const { data, error } = await supabase
				.from("posts")
				.select("*")
				.eq("id", id)
				.single()

			if (!error) setPost(data)
			setLoading(false)
		}

		fetchPost()
	}, [id])

	useEffect(() => {
		async function fetchOtherPosts() {
			if (!id) return

			const { data, error } = await supabase
				.from("posts")
				.select("*")
				.neq("id", id)
				.order("created_at", { ascending: false })

			if (error) {
				console.error("Ошибка загрузки других постов:", error)
			} else {
				setOtherPosts(data)
			}
		}

		fetchOtherPosts()
	}, [id])

	if (loading) return <p>Загрузка...</p>
	if (!post) return <p>Пост не найден</p>

	return (
		<div className={style.blogDetail}>
			<div className="container">
				<div className={style.blogDetailBlock}>
					<h2 className={style.blogDetailBlockHeading}>{post.title}</h2>
					<div className={style.blogDetailTime}>
						<p className={style.blogDetailDate}>Date: {new Date(post.created_at).toLocaleDateString()}</p>
					</div>
					<img src={post.image_url} width="720" height="400" alt={post.title} />
					<p className={style.blogDetailParag}>{post.content}</p>
					<p className={style.blogDetailTheme}><strong>Тема:</strong> {post.theme}</p>
					<br />
					<Link to="/blog">⬅ Назад к списку</Link>
				</div>
				<div className={style.blogDetailOthers}>
					<h2 className={style.blogDetailOthersHeading}>Так же посмотрите: </h2>
					{otherPosts.map(p => (
						<PostItem key={p.id} post={p} />
					))}
				</div>
			</div>
		</div>
	)
}

export default BlogDetailed

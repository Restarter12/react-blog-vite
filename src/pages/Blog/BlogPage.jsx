import { useSearch } from '../../context/SearchContext'
import Posts from '../../components/Posts/Posts'

const BlogPage = () => {
  const { searchTerm } = useSearch()

  return (
    <div>
      <div className="container">
        <Posts searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default BlogPage

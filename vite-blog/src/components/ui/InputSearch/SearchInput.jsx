import { memo } from "react"
import style from "./searchInput.module.scss"
import { useSearch } from '../../../context/SearchContext'
import { useNavigate } from 'react-router-dom'


const SearchInput = () => {
  const navigate = useNavigate()
  const { searchTerm, setSearchTerm } = useSearch()

  return (
    <input
      className={style.headerNavInput}
      value={searchTerm}
      onChange={e => {
        setSearchTerm(e.target.value)
        navigate("/blog")
      }} 
      type="search"
      placeholder="Search..."
      
    />
  )
}

export default memo(SearchInput)

import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "../pages/Home/Home"
import BlogPage from "../pages/Blog/BlogPage"
import BlogDetailed from '../pages/BlogDetailed/BlogDetailed'

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogdetail/:id" element={<BlogDetailed />} />
      </Route>
    </Routes>
  )
}

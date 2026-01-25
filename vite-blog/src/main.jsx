import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import "./index.scss"
import MainRoutes from "./components/MainRoutes"
import { SearchProvider } from './context/SearchContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <SearchProvider>
        <MainRoutes />
      </SearchProvider>
    </HashRouter>
  </StrictMode>
)

import { lazy } from "react"

// Use lazy loading to load pages
const HomePage = lazy(() => import("../pages/HomePage"))
const AboutPage = lazy(() => import("../pages/AboutPage"))

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/about",
    page: AboutPage,
  },
]

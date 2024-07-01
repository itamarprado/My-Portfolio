import { createBrowserRouter } from "react-router-dom"
import Home from "../src/pages/Home"
import ProjectInfo from './pages/ProjectInfo';

const router = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: ':id', element: <ProjectInfo /> }
])

export default router
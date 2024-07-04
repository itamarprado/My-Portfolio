import { createBrowserRouter } from "react-router-dom"
import Home from "../src/pages/Home"
import ProjectInfo from './pages/ProjectInfo';
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: 'project/:id', element: <ProjectInfo /> },
        ],
      },
])

export default router
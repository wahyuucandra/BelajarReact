import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import UserManagement from "./pages/UserManagement.jsx"
import Film from './pages/Film.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "film",
          element: <div><App/><Film/></div>,
        },
        {
          path: "statistic",
          element: <div><App/><div className="content"> Ini Menu Statistic</div></div>,
        },
        {
          path: "user",
          element: <div><App/><UserManagement/></div>,
        },
        {
          path: "cms",
          element: <div><App/><div className="content"> Ini Menu CMS</div></div>,
        },
      ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

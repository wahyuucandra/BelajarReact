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
import DetailFilm from './pages/DetailFilm.jsx'

const router = createBrowserRouter([
    {
      path: "",
      // element: <App/>,
      element: <div><App/><div className="content"> Ini Menu Home</div></div>,
    },
    {
      path: "film",
      children: [
        {
          path: "",
          element: <div><App/><Film/></div>,
        },
        {
          path: ":id",
          element: <div><App/><DetailFilm/></div>
        },
      ]
    },
    {
      path: "user",
      element: <div><App/><UserManagement/></div>,
    },
    {
      path: "cms",
      element: <div><App/><div className="content"> Ini Menu CMS</div></div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider context={ThemeContext}>
//       <RouterProvider router={router}/>
//   </Provider>
  
// )

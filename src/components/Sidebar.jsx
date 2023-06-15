import React from 'react'
import {
  Link, useParams
} from "react-router-dom"

const Sidebar = () => {
  const param = useParams()

  return (
    <div className="sidebar">
        <div className="title__dashboard">
            The Dashboard
        </div>

        <div id="nav-link" className='nav_links'>
            <Link className="link-menu" to="/" >Home</Link>
            <Link className="link-menu" to="/film">Film</Link>
            <Link className="link-menu" to="/user" >User</Link>
            <Link className="link-menu" to="/cms">CMS</Link>
        </div>
    </div>
  )   
}

export default Sidebar
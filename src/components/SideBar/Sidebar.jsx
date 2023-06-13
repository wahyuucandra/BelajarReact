import React from 'react'
import "./Sidebar.css"
import { Link } from "react-scroll"
import { Divider } from '@mui/material'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="title__dashboard">
            The Dashboard
        </div>

        <div id="nav-link" className='nav_links'>
            <Link className="link-menu" href="#home" activeClass='active' spy to="home" >Home</Link>
            <Link className="link-menu" href="#about" activeClass='active' spy to="about" >Statistic</Link>
            <Link className="link-menu" href="#experience" activeClass='active' spy to="experience" >User</Link>
            <Link className="link-menu" href="#portofolio" activeClass='active' spy to="portofolio" >CMS</Link>
        </div>
    </div>
  )   
}

export default Sidebar
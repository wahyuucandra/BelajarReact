import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="title__dashboard">
            The Dashboard
        </div>

        <div id="nav-link" className='nav_links'>
            <a className="link-menu" href="film" >Home</a>
            <a className="link-menu" href="statistic">Statistic</a>
            <a className="link-menu" href="user" >User</a>
            <a className="link-menu" href="cms">CMS</a>
        </div>
    </div>
  )   
}

export default Sidebar
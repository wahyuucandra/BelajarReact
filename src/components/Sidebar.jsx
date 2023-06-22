import { useEffect, useState } from "react";
import {
  Link,
} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Sidebar = () => {
  const [active, setActive] = useState(localStorage.getItem('active'))

  useEffect(() => {
    localStorage.setItem('active', 1)
  }, []);

  const setActiveMenu = (menu) => {
    setActive(menu)
    localStorage.setItem('active', menu)
    
  }

  return (
    <div className="nav">
      <div id="navbar" className="sidebar">
        <div className="desktop_view">
          <div id="nav-link" className='nav_links'>
              <Link className= { active==1 ? "link-menu-active": "link-menu"} onClick={() => setActiveMenu(1)} to="/" >Home</Link>
              <Link className= { active==2 ? "link-menu-active": "link-menu"} onClick={() => setActiveMenu(2)} to="/film">Film</Link>
              <Link className= { active==3 ? "link-menu-active": "link-menu"} onClick={() => setActiveMenu(3)} to="/user" >User</Link>
              <Link className= { active==4 ? "link-menu-active": "link-menu"} onClick={() => setActiveMenu(4)} to="/cms">CMS</Link>
          </div>
        </div>
      </div>
    </div>
  )   
}

export default Sidebar
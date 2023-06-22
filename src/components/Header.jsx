import React from 'react'
import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import SideBar from "./Sidebar"

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  
  const clickHamburgerBar = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    console.log(isHamburgerOpen)
    if(isHamburgerOpen == true){
      document.getElementById("navbar").style.display = "none"
        
    }
    else{
      document.getElementById("navbar").style.display = "block"
    }
      
  }

  return (
    <div id="header" className="header">
      <div className="mobile_view">
        <div className="hamburger_bar" onClick={clickHamburgerBar}>
            {isHamburgerOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
          <div className="title__dashboard">
            The Dashboard
           </div>
        </div>
       </div>

      <div className="title__dashboard_desktop">
          The Dashboard
      </div>
      <div className="header__container">
          <div className="user__container">A</div>
          <div className="name_user">Administrator</div>
          
      </div>
      <SideBar/>
    </div>
  )
}

export default Header
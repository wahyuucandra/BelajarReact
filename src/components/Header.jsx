import React from 'react'
import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {

  return (
    <div id="header" className="header">
        <div className="header__container">
            <div className="user__container">A</div>
            <div className="name_user">Administrator</div>
            
        </div>

    </div>
  )
}

export default Header
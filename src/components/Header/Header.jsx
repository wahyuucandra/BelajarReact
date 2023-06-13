import React from 'react'
import "./Header.css"
import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {

  return (
    <nav id="nav">
        <div className="container nav__container">
            <div className="title__dashboard">
                <h2>The Dashboard</h2>
            </div>

            <div className="user__container">
                <p>U</p>
            </div>
        </div>

    </nav>
  )
}

export default Header
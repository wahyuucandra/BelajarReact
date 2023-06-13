import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/Sidebar"
import UserManagement from "./components/Page/UserManagement/UserManagement"

function App() {
  return (
    <div className="main">
      <Header/>
      <SideBar/>
      <UserManagement/>
    </div>
  )
}

export default App

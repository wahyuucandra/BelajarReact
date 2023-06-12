import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./components/HelloWorld"

function App() {
  var [point, setPoint] = useState(0);
  var [nilai, setNilai] = useState({nilaiKiri:0, nilaiKanan:0})

  return (
    <div className="main_container">

      <div className="basketball_container">
        <h2>BASKETBALL POINT</h2>
        <div className='point_container'>
          <button onClick={() => setPoint(point + 1)}> 1 Point </button>
          <button onClick={() => setPoint(point + 2)}> 2 Point </button>
          <button onClick={() => setPoint(point + 3)}> 3 Point </button> 
        </div>
        

        <p id ="point"> Point : {point} </p>
      </div>
      
      <div className="basketball_container">
        <h2>BULU TANGKIS POINT</h2>
        <div className='nilai_container'>
          <div className='nilai_digit'>
            <input type="number" enabled="false" value={nilai.nilaiKiri}/>
            <button onClick={() => setNilai({nilaiKiri: nilai.nilaiKiri >= 21 ? 0 : nilai.nilaiKiri+1, nilaiKanan: nilai.nilaiKiri >= 21 ? 0: nilai.nilaiKanan})}> Tambah Point </button>
          </div>

          <div className='nilai_digit'>
            <input type="number" enabled="false" value={nilai.nilaiKanan}/>
            <button onClick={() => setNilai({nilaiKiri: nilai.nilaiKanan >= 21 ? 0 : nilai.nilaiKiri, nilaiKanan: nilai.nilaiKanan >= 21 ? 0 : nilai.nilaiKanan+1})}> Tambah Point </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

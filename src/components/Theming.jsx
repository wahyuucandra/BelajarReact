import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Theming = () => {
  const [isLight, setIsLight] = useState(false);
  var context = useContext(ThemeContext);
  console.log(context)

  return (
    <div 
        style = {{
            display:"flex", 
            flexDirection: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            weight: "100vw",
            backgroundColor: isLight ? "white" : "black",
            color: isLight ? "black" : "white"
         }}
    >
        <button onClick = { () => setIsLight(!isLight)}>Change Theme</button>
    </div>
  )
}

export default Theming
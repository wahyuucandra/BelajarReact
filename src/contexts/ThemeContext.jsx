import {createContext, useEffect, useState} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const value = {
        isLight,
        setIsLight,
    }

    useEffect(() => {
        //localStorage.setItem("theme", isLight ? false : true)
        setIsLight(!isLight)
    }, [isLight])

    return (
        <div>
            <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext};
export default ThemeProvider;
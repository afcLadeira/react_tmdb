import { useDarkMode } from "../hooks/useDarkMode";

import { ThemeProvider } from "styled-components"
import { lightTheme , darkTheme } from "../styles/themes"
const { createContext } = require("react");


const ThemeContext = createContext()

export const MyThemeProvider = ({children}) => {

    const [theme, themeToggler] = useDarkMode()
    return (
        <ThemeContext.Provider value={{theme,themeToggler}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}

export default ThemeContext; 
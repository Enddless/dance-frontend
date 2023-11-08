import { createContext, useState } from "react";

export const ThemeContext = createContext({ isDark: false })

export const ThemeProvider = ({children}: {children : React.ReactNode}) => {
    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}
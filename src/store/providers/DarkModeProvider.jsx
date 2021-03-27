import React from "react"
import useDarkMode from "hooks/useDarkMode"

import { DarkModeContext } from "store/context"

const DarkModeProvider = ({ children }) => {
  const [mode, toggleMode] = useDarkMode()

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider

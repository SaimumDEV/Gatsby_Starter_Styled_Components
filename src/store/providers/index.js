import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "styles/themes/default"
import DarkModeProvider from "./DarkModeProvider"

const ApplicationProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ThemeProvider>
  )
}

export default ApplicationProvider

import React, { useContext } from "react"
import { DarkModeContext } from "store/context"
import { Global } from "styles"
import { Root } from "./elements"

const Layout = ({ children }) => {
  const { mode } = useContext(DarkModeContext)

  return (
    <>
      <Global mode={mode} />
      <Root>{children}</Root>{" "}
    </>
  )
}
export default Layout

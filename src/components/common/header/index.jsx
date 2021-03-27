import React, { useState, useCallback, memo } from "react"
import Navbar from "./navbar"
import Hamburger from "./hamburger"
import Sidebar from "./sidebar"
import { Wrapper, Overlay } from "./elements"

const Header = () => {
  const [sidebar, toggle] = useState(false)

  const handleToggle = useCallback(() => {
    toggle(prev => !prev)
  }, [])

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={handleToggle} />
      <Navbar />
      <Hamburger sidebar={sidebar} handleToggle={handleToggle} />
      <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
    </Wrapper>
  )
}
export default memo(Header)

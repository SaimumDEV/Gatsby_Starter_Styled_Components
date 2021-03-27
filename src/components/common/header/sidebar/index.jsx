import React, { useContext, memo } from "react"
import PropTypes from "prop-types"
import { DarkModeContext } from "store/context"
import NavbarLinks from "../navlinks"
import { Wrapper } from "./elements"

const Sidebar = ({ sidebar, handleToggle }) => {
  const { mode } = useContext(DarkModeContext)

  return (
    <Wrapper active={sidebar} onClick={handleToggle} mode={mode}>
      <NavbarLinks sidebar={sidebar} />
    </Wrapper>
  )
}

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
}
export default memo(Sidebar)

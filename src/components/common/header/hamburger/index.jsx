import React, { useContext, memo } from "react"
import PropTypes from "prop-types"

import { DarkModeContext } from "store/context"
import { Wrapper, Bar } from "./elements"

const Hamburger = ({ sidebar, handleToggle }) => {
  const { mode } = useContext(DarkModeContext)

  return (
    <Wrapper sidebar={sidebar} onClick={handleToggle}>
      <Bar top sidebar={sidebar} mode={mode} />
      <Bar mid sidebar={sidebar} mode={mode} />
      <Bar bottom sidebar={sidebar} mode={mode} />
    </Wrapper>
  )
}

Hamburger.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
}

export default memo(Hamburger)

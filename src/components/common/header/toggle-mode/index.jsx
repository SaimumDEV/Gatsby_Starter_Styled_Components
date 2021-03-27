import React, { useContext, memo } from "react"
import PropTypes from "prop-types"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"

import { DarkModeContext } from "store/context"
import { Wrapper } from "./elements"

const ToggleMode = ({ sidebar }) => {
  const { mode, toggleMode } = useContext(DarkModeContext)

  return (
    <Wrapper
      type="button"
      aria-label="mode"
      onClick={toggleMode}
      sidebar={sidebar}
      mode={mode}
    >
      {mode === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Wrapper>
  )
}

ToggleMode.defaultProps = {
  sidebar: false,
}

ToggleMode.propTypes = {
  sidebar: PropTypes.bool,
}

export default memo(ToggleMode)

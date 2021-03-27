import React, { useContext, memo } from "react"
import { Link } from "gatsby"

import { DarkModeContext } from "store/context"
import { Container } from "components/base"
import NavbarLinks from "../navlinks"
import { Wrapper, Brand } from "./elements"

import { useSiteMetadata } from "hooks/useSiteMetadata"

const Navbar = () => {
  const { mode } = useContext(DarkModeContext)
  const { title } = useSiteMetadata()

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" mode={mode}>
        {title}
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}

export default memo(Navbar)

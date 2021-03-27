import React, { useContext } from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { DarkModeContext } from "store/context"
import ToggleMode from "../toggle-mode"
import { Wrapper } from "./elements"
import { header } from "data/site"

const NavbarLinks = ({ desktop, sidebar }) => {
  const { mode } = useContext(DarkModeContext)

  return (
    <Wrapper desktop={desktop} mode={mode}>
      {header.navlinks.map(({ id, title, link }) => (
        <AnchorLink key={id} to={link}>
          {title}
        </AnchorLink>
      ))}
      <ToggleMode sidebar={sidebar} />
    </Wrapper>
  )
}

NavbarLinks.propTypes = {
  desktop: PropTypes.bool,
  sidebar: PropTypes.bool,
}

export default NavbarLinks

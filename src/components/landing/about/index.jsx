import React, { useContext, memo } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { DarkModeContext } from "store/context"
import { Container, Button } from "components/base"
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./elements"

import { about } from "data/site"

const About = () => {
  const { mode } = useContext(DarkModeContext)

  return (
    <Wrapper id={about.id}>
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <StaticImage
            src="../../../assets/illustrations/skills.svg"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="about"
          />
        </Thumbnail>
        <Details mode={mode}>
          <h1>{about.title}</h1>
          <p>{about.subTitle}</p>
          <Button as={AnchorLink} to={about.nevigateTo}>
            {about.buttonLabel}
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}

export default memo(About)

import React, { memo, useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { DarkModeContext } from "store/context"
import { Container, Button } from "components/base"
import { Header } from "components/common"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./elements"
import { intro } from "data/site"

const Intro = () => {
  const { mode } = useContext(DarkModeContext)

  return (
    <Wrapper id={intro.id}>
      <Header />
      <IntroWrapper as={Container}>
        <Details mode={mode}>
          <h1>{intro.title}</h1>
          <h2>{intro.subTitle}</h2>
          <Button as={AnchorLink} to={intro.nevigateTo}>
            {intro.buttonLabel}
          </Button>
        </Details>
        <Thumbnail>
          <StaticImage
            src="../../../assets/illustrations/dev.svg"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="intro"
          />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}

export default memo(Intro)

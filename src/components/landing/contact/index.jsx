import React, { memo } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container } from "components/base"
import { Wrapper, Details, Thumbnail } from "./elements"

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details></Details>
    <Thumbnail>
      <StaticImage
        src="../../../assets/illustrations/contact.svg"
        width={500}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="contact"
      />
    </Thumbnail>
  </Wrapper>
)
export default memo(Contact)

import React, { memo } from "react"
import { Container } from "components/base"
import { Link } from "gatsby"
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"

import { Wrapper, Flex, Links, Details, Brand } from "./elements"
import { useSiteMetadata } from "hooks/useSiteMetadata"

const Footer = () => {
  const { title, authorEmail, author } = useSiteMetadata()
  const social = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      name: "Youtube",
      link: "https://youtube.com",
      icon: <FaYoutube />,
    },
    {
      name: "Linkdin",
      link: "https://stackoverflow.com",
      icon: <FaTwitter />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: <FaLinkedin />,
    },
  ]
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <Brand as={Link} to="/">
            {title}
          </Brand>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
            <span aria-label="love" role="img">
              💖
            </span>{" "}
            by{" "}
            <a
              href={`mailto:${authorEmail}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {author}
            </a>
          </span>
        </Details>
        <Links>
          {social.map(({ name, link, icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              {icon}
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  )
}
export default memo(Footer)

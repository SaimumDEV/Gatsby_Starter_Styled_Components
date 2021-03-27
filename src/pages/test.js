import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/common/seo"

const TestPage = ({ data }) => {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the test page</h1>
      <p>set by client-side ENV: {`${process.env.ENVIRONMENT}`}</p>
      <GatsbyImage image={image} alt={data.file.id} />

      <StaticImage
        src="../assets/images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default TestPage

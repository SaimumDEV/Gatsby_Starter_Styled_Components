import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            url
            language
            title
            description
            author
            authorEmail
          }
        }
      }
    `
  )
  return site.siteMetadata
}

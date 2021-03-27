import React, { memo } from "react"

import Layout from "components/layout"
import SEO from "components/common/seo"
import { Footer } from "components/common"
import { Intro, About, Contact } from "components/landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Contact />
    <Footer />
  </Layout>
)

export default memo(IndexPage)

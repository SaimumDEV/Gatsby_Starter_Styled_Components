import React from "react"
import ApplicationProvider from "store/providers"

export const wrapRootElement = ({ element }) => (
  <ApplicationProvider>{element}</ApplicationProvider>
)

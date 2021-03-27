import React from "react"
import ApplicationProvider from "store/providers"

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const wrapRootElement = ({ element }) => (
  <ApplicationProvider>{element}</ApplicationProvider>
)

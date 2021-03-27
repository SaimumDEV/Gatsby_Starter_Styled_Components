import { useState, useEffect } from "react"
import useMedia from "hooks/useMedia"

const useDarkMode = () => {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      window.localStorage.setItem("mode", "dark")
      setMode("dark")
    } else {
      window.localStorage.setItem("mode", "light")
      setMode("light")
    }
  }

  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  )

  useEffect(() => {
    const localMode = window.localStorage.getItem("mode")
    if (localMode) {
      window.localStorage.setItem("mode", localMode)
      setMode(localMode)
    } else if (prefersDarkMode) {
      setMode("dark")
    } else {
      setMode("light")
    }
  }, [prefersDarkMode])

  return [mode, toggleMode]
}

export default useDarkMode

import styled from "styled-components"
import media from "styles/media-query"

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.a`
  color: ${({ mode, theme }) =>
    mode === "light" ? `${theme.colors.black}` : `${theme.colors.white}`};
  font-size: 1.5rem;
  ${media.down("md")} {
    mix-blend-mode: ${({ mode }) =>
      mode === "light" ? "unset" : "difference"};
  }
`

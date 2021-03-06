import styled from "styled-components"
import media from "styles/media-query"

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  color: ${({ mode, sidebar, theme }) =>
    sidebar
      ? mode === "light"
        ? `${theme.colors.black}`
        : `${theme.colors.white}`
      : `${theme.colors.black}`};

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  ${media.down("md")} {
    text-align: left;
  }
`

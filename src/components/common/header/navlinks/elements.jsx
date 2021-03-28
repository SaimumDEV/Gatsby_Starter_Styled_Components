import styled, { css } from "styled-components"
import media from "styles/media-query"

export const Wrapper = styled.div`
  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    text-decoration: none;

    ${media.down("sm")} {
      color: ${({ mode, theme }) =>
        mode === "light" ? `${theme.colors.black}` : `${theme.colors.white}`};
    }
  }

  ${({ desktop }) =>
    desktop
      ? css`
          align-items: center;
          display: flex;

          ${media.down("sm")} {
            display: none;
          }

          a {
            margin-right: 1rem;

            &:last-child {
              margin-right: unset;
            }
          }
        `
      : css`
          padding: 3rem;
          display: flex;
          flex-direction: column;

          a {
            margin-bottom: 1rem;

            &:last-child {
              margin-bottom: unset;
            }
          }
        `}
`

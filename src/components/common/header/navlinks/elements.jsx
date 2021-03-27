import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  a {
    color: #000;
    font-size: 1rem;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ mode, theme }) =>
        mode === "light" ? `${theme.colors.black}` : `${theme.colors.white}`};
    }
  }

  ${({ desktop }) =>
    desktop
      ? css`
          align-items: center;
          display: flex;

          @media (max-width: 960px) {
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

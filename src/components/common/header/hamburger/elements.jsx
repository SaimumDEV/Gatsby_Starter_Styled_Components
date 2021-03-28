import styled, { css } from "styled-components"
import media from "styles/media-query"

export const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  ${media.down("sm")} {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    css`
      right: 18%;
      top: 1.4rem;

      ${media.down("sm")} {
        right: 35%;
        position: fixed;
      }

      ${media.down("xs")} {
        right: 66%;
      }
    `}
`

export const Bar = styled.div`
  width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: ${({ theme }) => theme.colors.black};
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;

  ${media.down("xs")} {
    width: 1.6rem;
  }

  ${({ top, sidebar, mode, theme }) =>
    top &&
    sidebar &&
    css`
      background-color: ${mode === "light"
        ? `${theme.colors.black}`
        : `${theme.colors.white}`};
      transform: translateY(8px) rotate(-135deg);
    `}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
		transform: scale(0);
		`}

	${({ bottom, sidebar, mode, theme }) =>
    bottom &&
    sidebar &&
    css`
      background-color: ${mode === "light"
        ? `${theme.colors.black}`
        : `${theme.colors.white}`};
      transform: translateY(-6px) rotate(-45deg);
    `}
`

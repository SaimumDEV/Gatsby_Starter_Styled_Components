import styled from "styled-components"
import overlayIllustration from "assets/illustrations/overlay.svg"

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  width: 100%;
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: ${({ mode, theme }) =>
      mode === "dark" ? `${theme.colors.white}` : `${theme.colors.black}`};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ mode }) =>
        mode === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: normal;
    color: ${({ mode, theme }) =>
      mode === "dark"
        ? `${theme.colors.greyDark}`
        : `${theme.colors.greyLight}`};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ mode }) =>
        mode === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 1.5rem;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

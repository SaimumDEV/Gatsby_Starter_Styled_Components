import styled from "styled-components"
import detailsIllustration from "assets/illustrations/details.svg"

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
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
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ mode, theme }) =>
      mode === "dark" ? `${theme.colors.white}` : `${theme.colors.black}`};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ mode }) =>
        mode === "light" ? "unset" : "difference"};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ mode, theme }) =>
      mode === "dark"
        ? `${theme.colors.greyDark}`
        : `${theme.colors.greyLight}`};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ mode }) =>
        mode === "light" ? "unset" : "difference"};
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`
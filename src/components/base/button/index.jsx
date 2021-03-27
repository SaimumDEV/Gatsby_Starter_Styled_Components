import styled, { css } from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
    `}
`

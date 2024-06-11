import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px var(--purple-dark);
  }


  body {
    background: ${({ theme }) => theme.colors.baseBackground};
    color: ${({ theme }) => theme.colors.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`
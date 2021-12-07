import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    *, *::after, *::before {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    img {
      max-width: 100%;
    }

    body {
      font-size: 1.6rem;
      line-height: 1.5;
      color:  ${theme.colors.primary};
      font-family: ${theme.font.fontFamily};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input, textarea, select {

    }

  `}
`;

export default GlobalStyle;

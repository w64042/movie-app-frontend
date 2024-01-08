import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 1rem;
    font-family: Lato, sans-serif;
    box-sizing: border-box;
    background-color: #1B1B1B;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }

  input {
    background-color: transparent;
    border: 1px solid #fff !important; 
  }
  .ant-popover {
    button span {
      color: #000 !important;
    }
  }
`;

export default GlobalStyle;

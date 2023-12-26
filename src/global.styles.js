import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    //overflow-y: scroll;
    padding: 24px;
    font-family: "Titillium Web", sans-serif !important;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  li {
    list-style-type: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

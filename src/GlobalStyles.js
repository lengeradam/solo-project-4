import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 1.125rem;
    font-family: 'Karla', sans-serif;  
    }
  body {
    background-color: hsla(220, 43%, 97%, 1);
  }

  button {
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
`;
export default GlobalStyles;

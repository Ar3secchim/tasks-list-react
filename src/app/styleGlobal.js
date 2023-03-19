import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    margin: 0;
    padding: 0;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    background-color:#F5F4F6;

    /* color-scheme: light dark;
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    */
  }

  body {
    box-sizing: border-box;
    margin: 4rem 0rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100vw;
  }


`
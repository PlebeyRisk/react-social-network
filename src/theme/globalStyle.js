import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: '#262626',
  secondary: '#4aa0f1',
  light: '#fff',
  dark: '#000',
  gray: '#fafafa',

  textPrimary: '#262626',
  textTwo: 'rgba(38, 38, 38, 0.7)',
  textThree: 'rgba(38, 38, 38, 0.5)',
  textFour: 'rgba(38, 38, 38, 0.2)',

  border: '#dbdbdb',
  placeholder: '#999'
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    background-color: #fafafa;
    color: ${ colors.primaryText }
  }

  main {
    min-width: 100%;
    flex-grow: 1;
  }

  div, input, button, a {
    box-sizing: border-box;
  }


`



export default GlobalStyle;
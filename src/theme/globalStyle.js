import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: '#262626',
  secondary: '#4aa0f1',
  light: '#fff',
  dark: '#000',
  gray: '#fafafa',

  textPrimary: '#262626',
  textSecondary: 'rgba(38, 38, 38, 0.70)',
  textTertiary: 'rgba(38, 38, 38, 0.2)',

  border: '#dbdbdb',
  placeholder: '#999'
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    background-color: #fafafa;
    color: ${ colors.primaryText }
  }

  div, input, button {
    box-sizing: border-box;
  }


`



export default GlobalStyle;
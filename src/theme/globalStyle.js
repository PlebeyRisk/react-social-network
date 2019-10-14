import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: '#262626',
  secondary: '#4aa0f1',
  light: '#fff',
  dark: '#000',
  gray: '#fafafa',
  stillGray: '#f5f5f5',

  textPrimary: '#262626',
  textTwo: 'rgba(38, 38, 38, 0.7)',
  textThree: 'rgba(38, 38, 38, 0.5)',
  textFour: 'rgba(38, 38, 38, 0.2)',

  border: '#dbdbdb',
  placeholder: '#999'
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: ${ colors.primaryText }
  }

  main {
    padding-top: 78px;
    min-width: 100%;
    flex-grow: 1;
  }

  div, input, button, a, form, textarea {
    box-sizing: border-box;
    outline: none;
  }

  div, form, textarea {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0,0,0,0.1);
    }
  }


`



export default GlobalStyle;
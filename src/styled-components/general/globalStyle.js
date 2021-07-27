import {createGlobalStyle} from 'styled-components';
import {device} from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};
  }
  :root{
    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      font-size: 18px;
    }
  }
  * {
    box-sizing: border-box;
  }

  input {
    height: 34px;
  }

  button {
    font-size: 1.875rem;

    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    font-size: 2.813rem
  }

  a {
    color: ${props => props.theme.color.white};
    text-decoration: none;
  }
`;
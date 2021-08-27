import {createGlobalStyle} from 'styled-components';
import {device} from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};
    &:hover {
      cursor: default;
    }
  }
 
  :root {
    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      font-size: 18px;
    }

    @media ${device.tablet} {
      font-size: 20px;
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
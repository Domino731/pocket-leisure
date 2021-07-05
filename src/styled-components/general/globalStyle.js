import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white}
  }
  input{
    height: 34px;
  }
 button{
   font-size: 1.875rem;
 }
  h1{
    font-size: 3.5rem
  }
`;
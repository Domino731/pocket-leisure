import {keyframes} from "styled-components";

export const formIcon = keyframes`
  100% {
    background: blue;
  }
`
export const an__formRecovery = keyframes`
  100% {
    transform: scale(100%);
  }
`
export const an__navigationItem = keyframes`
100%{
 transform: scale(0);
}
`
export const an__checkboxRadio = keyframes`
100%{
  width: 100%;
  color: ${props => props.theme.color.white}
}
`
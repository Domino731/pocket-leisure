import styled from "styled-components";
import {formIcon} from "../../general/animations";

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    margin-bottom: 1.25rem;
    text-align: center;
  }
  button{
    width: 286px;
    height: 50px;
    margin-top: 50px;
    border: none;
    border-radius: ${props => props.theme.border_radius.l};
    background: ${props => props.theme.color.red};
    box-shadow: 0 0 14px ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    font-weight: bold;
  }
 
`
export const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-left: ${props => props.right ? "30px" : "0"};
  
  i {
    //animation: ${formIcon} 2s infinite;
    font-size: ${props => props.theme.icons.l};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 60px;
    width: 60px;
    box-shadow: 0 0 14px ${props => props.theme.color.red};
    border-radius: 40px;
    margin-left: ${props => props.right ? "-21px" : "0"};
    background: ${props => props.theme.color.red};
  }

  input {
    margin-left: -21px;
    padding-left: 25px;
    width: 235px;
    border: none;
    border-radius: ${props => props.theme.border_radius.l};
    font-weight: bold;
    color: ${props => props.theme.color.black};
    outline: none;
    transition: 0.5s;
    position: relative;
    &::after{
      position: absolute;
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      background: red;
      left: 0;
    }
  }
  input:focus{
    transition: 0.3s;
    border: ${props => props.theme.border.m} solid ${props => props.theme.color.red};
  }
  strong, a{
    margin-top: 11px;
    padding: 8px 25px;
    font-size: 0.875rem;
    font-weight: 600;
    transition: 0.1s;
    color: ${props => props.theme.color.white}
  }
  a{
    color: ${props => props.theme.color.white};
    text-decoration: none;
    &:hover{
      transition: 0.2s;
      cursor: pointer;
      color: ${props => props.theme.color.gray}
    }
  }
  strong{
    &:hover{
      transition: 0.2s;
      cursor: pointer;
      color: ${props => props.theme.color.gray}
    }
  }
`
export const FormInvalid = styled.div`
  strong{
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.813rem;
    color: ${props => props.theme.color.invalid}
  }
`

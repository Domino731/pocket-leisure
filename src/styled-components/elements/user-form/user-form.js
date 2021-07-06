import styled from "styled-components";


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
  }
  button{
    width: 286px;
    height: 50px;
    margin-top: 50px;
    border: none;
    border-radius: ${props => props.theme.border_radius.l};
    background: ${props => props.theme.color.red};
    
    color: ${props => props.theme.color.white};
    font-weight: bold;
  }
 
`
export const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:nth-child(3),  &:nth-child(4) {
    margin-left: 30px;
    i {
      margin-left: -21px;
    }
  }

  i {
    font-size: ${props => props.theme.icons.l};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 60px;
    width: 60px;
    border-radius: 40px;
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
  }
  input:focus{
    transition: 0.3s;
    border: ${props => props.theme.border.m} solid ${props => props.theme.color.red};
  }
  strong{
    margin-top: 11px;
    padding: 8px 25px;
    font-size: 0.875rem;
    transition: 0.1s;
    &:hover{
      transition: 0.2s;
      cursor: pointer;
      color: ${props => props.theme.color.gray}
    }
  }
`

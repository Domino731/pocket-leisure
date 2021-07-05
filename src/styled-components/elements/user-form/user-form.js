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
  strong{
    margin-top: 13px;
    padding: 3px 25px;
  }
`
export const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:nth-child(3) {
    margin-left: 30px;
    margin-bottom: 0;
    i {
      margin-left: -21px;
    }
  }

  i {
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
`

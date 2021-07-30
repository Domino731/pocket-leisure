import styled from "styled-components";
import {an__formRecovery} from "../../general/animations";
import {device} from "../../general/breakpoints";

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

  button {
    width: 286px;
    height: 50px;
    border: none;
    border-radius: ${props => props.theme.border_radius.l};
    background: ${props => props.theme.color.main};
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    color: ${props => props.theme.color.white};
    font-weight: bold;
  }

`
export const FormElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-left: ${props => props.right ? "22px" : "0"};

  i {
    font-size: ${props => props.theme.icons.l};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 60px;
    width: 60px;
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    border-radius: 70px;
    margin-left: ${props => props.right ? "-21px" : "0"};
    background: ${props => props.theme.color.main};

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 70px;
      height: 70px;
    }
    @media ${device.tablet} {
      width: 78px;
      height: 78px;
    }
    @media ${device.laptop} {
      width: 85px;
      height: 85px;
    }
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
    font-size: 1rem;
    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 300px;
      height: 40px;
    }

    @media ${device.tablet} {
      width: 400px;
      height: 47px;
    }
    @media ${device.laptop} {
      width: 600px;
    }
  }

  input:focus {
    transition: 0.3s;
    border: ${props => props.theme.border.m} solid ${props => props.theme.color.main};
  }

  input:hover {
    transition: 0.3s;
    border: ${props => props.theme.border.m} solid ${props => props.theme.color.main};
  }

  strong, a {
    margin-top: 11px;
    padding: 8px 25px;
    font-size: 0.875rem;
    font-weight: 600;
    transition: 0.1s;
    color: ${props => props.theme.color.white}
  }

  a {
    color: ${props => props.theme.color.white};
    text-decoration: none;

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      color: ${props => props.theme.color.gray}
    }
  }

  strong {
    &:hover {
      transition: 0.2s;
      cursor: pointer;
      color: ${props => props.theme.color.gray}
    }
  }
`
export const FormInvalid = styled.div`
  strong {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.813rem;
    color: ${props => props.theme.color.invalid}
  }
`
export const FormPasswordRecovery = styled.div`
  background: ${props => props.theme.color.main};
  width: 95vw;
  height: 341px;
  border-radius: ${props => props.theme.border_radius.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 14px ${props => props.theme.color.main};
  transform: scale(0);
  animation: ${an__formRecovery} 0.7s forwards;

  strong {
    margin-top: 14px;
    text-align: center;
    font-size: 1.688rem;
    line-height: 1.938rem;
  }

  i {
    margin-top: 35px;
    font-size: 10.25rem;
  }
`

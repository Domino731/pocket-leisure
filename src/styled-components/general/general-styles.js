import styled from "styled-components";
import {an__checkboxRadio} from "./animations";

export const Container = styled.section`
  width: 320px;
  margin: 0 auto;
`
export const TriangleBot = styled.div`
  z-index: -10;
  position: absolute;
  bottom: 0;
  left: 0;
  border-left: 100vw solid ${props => props.theme.color.main};
  border-top: 100px solid transparent;
`
export const TriangleTop = styled.div`
  z-index: -10;
  position: absolute;
  top: 0;
  right: 0;
  border-right: 100vw solid ${props => props.theme.color.main};
  border-bottom: 100px solid transparent;
`
export const PosterBig = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${props => props.theme.border_radius.l};
`
export const ItemTitleSmall = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 0.813rem;
`
export const ItemPremiereSmall = styled.span`
  display: block;
  font-size: 0.875rem;
  color: ${props => props.theme.color.gray};
`
export const CheckboxRadio = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 0.563rem 3.125rem;
    letter-spacing: 0.063rem;
    width: 100%;
    margin-bottom: 0.5rem;

    i {
      position: absolute;
      left: 0;
      margin-left: 0.75rem;
    }

    &::before {
      content: "";
      height: 100%;
      width: 40px;
      background: ${props => props.theme.color.main};
      position: absolute;
      z-index: -3;
      left: 0;
      border-radius: 0 50px 50px 0;
      
    }
  }

  input:checked ~ label::before {
    animation: ${an__checkboxRadio} 0.5s forwards;
  }

  input {
    appearance: none;
    width: 200px;
    position: absolute;
    left: 0;
    z-index: 3;
  }
`


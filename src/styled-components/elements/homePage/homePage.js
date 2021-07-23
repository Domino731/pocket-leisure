import styled from "styled-components";
import {an__navigationItem} from "../../general/animations";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 42px;
  width: 100%;
  margin-top: 20px;
`
export const NavigationItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 180px;
  margin: 5px;
  border-radius: 33px;
  overflow: hidden;
  animation: ${props => props.animation ? an__navigationItem : ""} 0.6s forwards;

`
export const NavigationItemTitle = styled.h2`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  padding-top: 1.188rem;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 58, 64, 0.2));
  font-size: 2.063rem;
  font-weight: bold;
  text-align: center;
`
export const NavigationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ColorForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 21px;
`

export const ColorFormCheckbox = styled.div`
  position: relative;
  width: 73px;
  height: 73px;
  input {
    appearance: none;
    background: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 3;
    border: none;
  }

 input:checked ~ label i {
   font-size: 56px;
 }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    border-radius: ${props => props.theme.border_radius.l};
    font-size: 0;
  }
`



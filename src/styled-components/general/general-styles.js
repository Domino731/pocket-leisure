import styled from "styled-components";
import {an__checkboxRadio} from "./animations";
import {theme} from "./theme";

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${props => props.theme.border_radius.l};
`
export const PosterBigMissing = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: ${props => props.theme.border_radius.l};
  font-size: 4.5rem;
`
export const PosterMed = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: ${props => props.theme.border_radius.l};
  margin-right: 0.625rem;
  flex-shrink: 0;
`
export const PosterMedMissing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100px;
  flex-shrink: 0;
  margin-right: 0.625rem;
  border-radius: ${props => props.theme.border_radius.l};
  color: ${props => props.theme.color.main};
  font-size: 4.5rem;
`
export const TitleBar = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: ${props => props.theme.icons.l};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    border-radius: 40px;
    margin-left: ${props => props.right ? "-21px" : "0"};
    background: ${props => props.theme.color.main};
  }
`
export const ItemTitleSmall = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 0.813rem;
`
export const ItemTitleMedium = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 1rem;
`
export const ItemPremiereSmall = styled.span`
  display: block;
  font-size: 0.875rem;
  color: ${props => props.theme.color.gray};
`
export const ItemPremiereMedium = styled.span`
  display: block;
  font-size: 1.063rem;
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
    border: none;

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
    background: transparent;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 3;
    border: none;

  }
`
export const TitlePrimary = styled.h1`
  margin: 0.625rem 0;
  font-size: 2.063rem;
  color: ${props => props.theme.color.main};;
  font-weight: bold;
  letter-spacing: 0.063rem;
`
export const Genre = styled.div`
  grid-area: ${props => props.area};
  border-radius: ${props => props.theme.border_radius.l};
  background: ${props => props.theme.color.main};
  font-weight: bold;
  letter-spacing: 0.081rem;
  overflow: hidden;
  box-shadow: 0 0 10px ${props => props.theme.color.main};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
export const GetMoreBtn = styled.button`
  width: 100%;
  height: 48px;
  margin: 30px 0;
  border: none;
  color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.border_radius.l};
  background: ${props => props.theme.color.main};
`
export const FullWidePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: -3;
  position: relative;
  filter: drop-shadow(5px 5px 5px #fff inset);

`

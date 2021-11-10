import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const Movie = styled.div`
  h1 {
    margin: 0.625rem 0;
    font-size: 2.063rem;
    color: ${props => props.theme.color.main};
    font-weight: bold;
    letter-spacing: 0.063rem;
  }
`
export const MovieCategory = styled.section`

`
export const MovieElementTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 1.563rem 0 0.625rem;
  transition: 0.1s;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 8px 0;
  transition: 0.1s;
  border-bottom: 1px solid ${props => props.theme.color.gray};
  @media ${device.mobileL} {
    margin: 10px 0;
    font-size: 21px;
    padding-bottom: 3px;
    border-bottom: 2px solid ${props => props.theme.color.gray};
  }
  @media ${device.tablet} {
    margin: 12px 0;
    font-size: 23px;
  }
  @media ${device.laptop} {
    margin: 9px 0;
    font-size: 18px;
  }
  @media ${device.laptopM} {
    margin: 11px 0;
    font-size: 19px;
  }
  @media ${device.laptopL} {
    margin: 13px 0;
    font-size: 22px;
    padding-bottom: 4px;
    border-bottom: 3px solid ${props => props.theme.color.gray};
  }
  @media ${device.laptopL} {
    margin: 16px 0;
    font-size: 22px;
  }
  i {
    margin-left: 0.875rem;
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    margin-top: 28px;
  }
`
export const MovieCategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 13px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    padding-bottom: 14px;
  }
  @media ${device.laptop} {
   overflow: visible;
   flex-wrap: wrap;
   padding-bottom: 21px;
  }
  @media ${device.laptopL} {
    &::-webkit-scrollbar {
      height: 17px;
    }
  }
`
export const MovieCategoryItem = styled.li`
  width: 50%;
  padding: 7px;
  flex-shrink: 0;
  
  ///////////
  // media //
  ///////////
  @media ${device.mobileL}{
    width: 33.33%;
  }
  @media ${device.tablet}{
    width: 25%;
  }
  @media ${device.laptop} {
    width: 20%;
  }
  @media ${device.laptopM} {
    width: 16.66%;
  }
  @media ${device.desktopS} {
    width: 14.28%
  }
`
export const MovieCategoryForm = styled.form`
  width: 100%;
  overflow: hidden;
`

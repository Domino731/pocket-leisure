import styled from "styled-components";
import { an__checkboxRadio } from "./animations";
import { device } from "./breakpoints";

export const Container = styled.main`
  margin: 0 auto;
  padding-bottom: 17px;
  max-width: 1600px;
  padding: 0 10px;
  ///////////
  // media //
  ///////////
  /* @media ${device.mobileM} {
    width: 370px;
  }

  @media ${device.mobileL} {
    width: 410px;
  }
  @media ${device.mobileXL}{
    width: 590px;
  }
  @media ${device.tablet} {
    width: 750px;
  }
  @media ${device.laptop} {
    width: 1000px;
  }
  @media ${device.laptopM} {
    width: 1250px;
  }
  @media ${device.laptopL} {
    width: 1430px;
  }
  @media ${device.desktopS} {
    width: 1590px;
  } */
`
export const PosterBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 215px;
  border-radius: 13px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    img {
    @media ${device.laptop}{
           transform: scale(110%);
       }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }

  @media screen and (min-width: 345px){
    height: 239px;
  }
  @media ${device.mobileM} {
    height: 262px;
  }
  @media screen and (min-width: 413px){
    height: 291px;
  }
  @media ${device.mobileL} {
    border-radius: 18px;
    height: 203px;
  }
  @media screen and (min-width: 480px){
    height: 228px;
  }
  @media screen and (min-width: 535px){
    height: 251px;
  }
  @media screen and (min-width: 580px){
    height: 261px;
  }
  @media ${device.mobileXL} {
    height: 281px;
  }
  @media screen and (min-width: 648px){
    height: 306px;
  }
  @media screen and (min-width: 700px){
    height: 327px;
  }
  @media ${device.tablet} {
    height: 284px;
  }
  @media screen and (min-width: 876px){
    height: 327px;
  } 
  @media screen and (min-width: 930px){
    height: 337px;
  }
  @media ${device.laptop} {
    border-radius: 14px;
    height: 273px;
  }
  @media screen and (min-width: 1070px){
    height: 289px;
  }
  @media screen and (min-width: 1133px){
    height: 320px;
  }
  @media screen and (min-width: 1228px){
    height: 335px;
  }
  @media ${device.laptopM} {
    height: 307px;
  }
  @media screen and (min-width: 1388px){
    height: 325px;
  }
  @media ${device.laptopL} {
    border-radius: 18px;
    height: 331px;
  }
  @media screen and (min-width: 1500px){
    height: 341px;
  }
  @media screen and (min-width: 1550px){
    height: 347px;
  }
  @media ${device.desktopS} {
    border-radius: 21px;
    height: 317px;
  }
`
export const PosterBigMissing = styled(PosterBig)`
box-shadow: 0 0 84px ${props => props.theme.color.missingBlack} inset;
img {
  width: 50%;
  height: auto;
}
`
export const PosterMed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  border-radius: ${props => props.theme.border_radius.l};
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.main};
  margin-right: 0.625rem;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  i {
    font-size: 30px;
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 125px;
    height: 188px;
    i {
      font-size: 54px;
    }

  }

  @media ${device.tablet} {
    width: 240px;
    height: 360px;
    i {
      font-size: 82px;
    }

  }
  @media ${device.laptopL} {
    width: 258px;
  }



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
  background: ${props => props.theme.color.black};
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 125px;
    font-size: 44px;
  }

  @media ${device.mobileL} {
    width: 210px;
    height: 315px;
    font-size: 54px;
  }


`
export const TitleBar = styled.header`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: 36px;
    width: 36px;
    background: ${props => props.theme.color.main};
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    border-radius: 50%;
    overflow: hidden;
    transition: 0.4s;

    &:hover {
      transition: 0.4s;
      width: 126px;
    }

    @media ${device.mobileM} {
      height: 41px;
      width: 41px;
    }
    @media ${device.mobileL} {
      height: 48px;
      width: 48px;
    }
    @media ${device.tablet} {
      height: 53px;
      width: 53px;
      &:hover {
        width: 168px;
      }
    }
    @media ${device.laptop} {
      height: 46px;
      width: 46px;
      border-radius: 23px;
    }
    @media ${device.desktopS} {
    height: 51px;
    width: 51px;
    border-radius: 27px;
    }
  }

  i {
    margin-left: 7px;
    font-size: 20px;
    z-index: 1;
    @media ${device.mobileM} {
      margin-left: 9px;
      font-size: 24px;
    }
    @media ${device.mobileL} {
      margin-left: 11px;
      font-size: 27px;
    }
    @media ${device.tablet} { 
      font-size: 34px;
      margin-left: 8px   
    }
    @media ${device.laptop} {
      font-size: 28px;
    }
    @media ${device.desktopS} {
      font-size: 33px;
    }
  }

  span {
    margin-left: 12px;
    @media ${device.tablet} { 
      font-size: 30px;
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
  }
`

export const ItemTitleSmall = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.425rem;
  letter-spacing: 0.063rem;
  font-size: 0.813rem;
`
export const ItemTitleMedium = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 1rem;
`
export const FactsTable = styled.table`
  border-spacing: 0;

  tr {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    i {
      color: ${props => props.theme.color.main};
      margin-right: 4px;
    }

    span {
      display: inline-block;
      word-wrap: break-word;
    }

    td:first-child {
      vertical-align: top;
      white-space: nowrap;
      padding: 0 20px 13px 0;
      color: ${props => props.theme.color.gray};
    }


    span {
      margin-right: 0.375rem;

      &::after {
        content: ",";
      }

      &:last-child {
        &::after {
          content: "";
        }

        margin-bottom: 10px;
      }
    }
  }
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

    &:hover {
      cursor: pointer;
    }

    ///////////
    // media //
    ///////////
    @media ${device.tablet} {
      height: 57px;
    }

    @media ${device.laptop} {
      height: 41px;
    }
    @media ${device.laptopL} {
      height: 44px;
    }
    i {
      position: absolute;
      left: 0;
      margin-left: 0.75rem;
    }
  }

  span {

    &::before {
      content: "";
      height: 100%;
      width: 40px;
      background: ${props => props.theme.color.main};
      position: absolute;
      z-index: -3;
      top: 0;
      left: 0;
      border-radius: 0 50px 50px 0;

      ///////////
      // media //
      ///////////
      @media ${device.tablet} {
        width: 55px
      }
      @media ${device.laptop} {
        width: 36px;
      }
      @media ${device.laptopL} {
        width: 43px;
      }
    }
  }

  input:checked ~ span::before {
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
  display: flex;
  flex-direction: column;

  span {
    font-size: 15px;
    color: ${props => props.theme.color.white}
  }
`
export const Genre = styled.li`
  grid-area: ${props => props.area};
  margin: 4px 3px;
  border-radius: 6px;
  background: ${props => props.theme.color.main};
  font-weight: bold;
  letter-spacing: 0.081rem;
  overflow: hidden;
  box-shadow: 0 0 8px ${props => props.theme.color.main};
    font-size: 13px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ///////////
  // media //
  ///////////

  @media ${device.mobileM} {
    font-size: 15px;
    margin: 4px 3px;
    border-radius: 9px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
    margin: 5px 4px;
    border-radius: 11px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    border-radius: 12px;
  }
  @media ${device.tablet} {
    font-size: 22px;
    border-radius: 14px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    border-radius: 8px;
    margin: 5px 3px;
    transition: 0.3s;
    &:hover {
      letter-spacing: 0.25rem;
    }
  }
  @media ${device.laptopL} {
    font-size: 23px;
    border-radius: 11px;
  }
  @media ${device.desktopS} {
    font-size: 24px;
    border-radius: 15px;
  }
`;

export const GetMoreBtn = styled.button`
  width: 100%;
  padding: 0.1em;
  font-size: 26px;
  margin: 16px 0;
  border: none;
  color: ${props => props.theme.color.white};
  border-radius: 7px;
  background: ${props => props.theme.color.main};

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    font-size: 28px;
    margin: 18px 0;
  }
  @media ${device.mobileL} {
    font-size: 31px;
    border-radius: 9px;
  }
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.laptop} {
    font-size: 27px;
    border-radius: 6px;
  }
  @media ${device.laptopM} {
    font-size: 28px;
  }
  @media ${device.laptopL} {
    font-size: 33px;
    border-radius: 9px;
  }
  @media ${device.desktopS} {
    font-size: 36px;
    border-radius: 12px;
  }
`;

export const FullWidePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: -3;
  position: relative;
  filter: drop-shadow(5px 5px 5px #fff inset);
`;
export const SortElementsButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 1.563rem 0 0.625rem;
  transition: 0.1s;
  background: transparent;
  color: #707070;
  i {
    margin-left: 0.875rem;
  }
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    letter-spacing: 0.063rem;
    color: ${props => props.theme.color.main}
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    margin-top: 28px;
  }
`
export const SearchInputContainer = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 16px;
  i {
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 49px;
    width: 49px;
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    border-radius: 70px;
    margin-left: ${props => props.right ? "-21px" : "0"};
    background: ${props => props.theme.color.main};

    ///////////
    // media //
    ///////////
    @media ${device.mobileM} {
      width: 53px;
      height: 53px;
    }
    @media ${device.mobileL} {
      width: 59px;
      height: 59px;
      font-size: 32px;
    }
    @media ${device.tablet} {
      width: 66px;
      height: 66px;
      font-size: 34px;
    }
    @media ${device.laptop} {
      width: 50px; 
      height: 50px;
      font-size: 29px;
    }
    @media ${device.laptopL} {
      width: 56px; 
      height: 56px;
      font-size: 32px;
    }
    @media ${device.desktopS} {
      width: 62px; 
      height: 62px;
      font-size: 37px;
    }
  }

  input {
    margin-left: -21px;
    padding-left: 25px;
    border: none;
    border-radius: 40px;
    font-weight: bold;
    color: ${props => props.theme.color.black};
    outline: none;
    transition: 0.1s;
    position: relative;
    font-size: 16px;
    width: calc(100% - 50px);

    ///////////
    // media //
    ///////////
    @media ${device.mobileM} {
      width: calc(100% - 54px);
    }
    @media ${device.mobileL} {
      width: calc(100% - 60px);
      height: 39px;
    }
    @media ${device.tablet} {
      width: calc(100% - 67px);
      height: 43px;
      font-size: 20px;
    }
    @media ${device.laptop} {
      width: calc(100% - 50px);
      width: 600px;
      height: 36px;
      font-size: 17px;
    }
    @media ${device.laptopL} {
      height: 38px;
    }
    @media ${device.desktopS} {
      height: 43px;
      width: 750px;
    }
  }

  input:focus {
    transition: 0.1s;
    border: 2px solid ${props => props.theme.color.main};
    @media ${device.laptopL} {
      border: 4px solid ${props => props.theme.color.main};
    }
  }

  input:hover {
    @media ${device.laptop} {
    border: 3px solid ${props => props.theme.color.main};
    }
    @media ${device.laptopL} {
      border: 4px solid ${props => props.theme.color.main};
    }
  }
`

export const CarouselButton = styled.button`
    box-sizing: border-box;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background-color: #e4eaec;
    color: #333;
    box-shadow: 0 0 2px 0px #333;
    border-radius: 50%;
    border: none;
    padding: 0;
    width: 25px;
    font-size: 10px;
    height: 25px;
    min-width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    cursor: pointer;
    outline: none;
`
export const ActionButtonWrapper = styled.div`
border-bottom: 2px solid ${props => props.theme.color.gray};
margin: 10px 0 8px;
padding-bottom: 5px;
 font-size: 17px;
button {
  font-size: 1em;
  background: transparent;
  border: none;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  transition: 0.2s;
  i {
    padding-right: 0.2em;
  }
  &:hover {

    cursor: pointer;
    @media ${device.laptop} {
      color: ${props => props.theme.color.gray};
      letter-spacing: 0.063rem;
    }
  }
}

 ///////////
 // media //
 ///////////
 @media ${device.mobileL}{
  font-size: 18px;
 }
 @media ${device.tablet} {
  margin: 13px 0 10px;
   font-size: 20px;
   border-bottom: 3px solid ${props => props.theme.color.gray};
 }
 @media ${device.laptop} {
  margin: 11px 0 8px;
  border-bottom: 2px solid ${props => props.theme.color.gray};
  font-size: 16px;
 }
 @media ${device.laptopM} {
  margin: 13px 0 9px;
  border-bottom: 3px solid ${props => props.theme.color.gray};
  font-size: 18px;
 }
 @media ${device.laptopL} {
  margin: 16px 0 11px;
  font-size: 20px;
 }
 @media ${device.desktopS} {
   font-size: 22px;
   border-bottom: 4px solid ${props => props.theme.color.gray};
 }
`
export const SectionTitle = styled.h3`

border-bottom: 2px solid ${props => props.theme.color.gray};
margin: 10px 0 8px;
padding-bottom: 5px;
 font-size: 17px;

 @media ${device.mobileL}{
  font-size: 18px;
 }
 @media ${device.tablet} {
  margin: 13px 0 10px;
   font-size: 20px;
   border-bottom: 3px solid ${props => props.theme.color.gray};
 }
 @media ${device.laptop} {
  margin: 11px 0 8px;
  border-bottom: 2px solid ${props => props.theme.color.gray};
  font-size: 16px;
 }
 @media ${device.laptopM} {
  margin: 13px 0 9px;
  border-bottom: 3px solid ${props => props.theme.color.gray};
  font-size: 18px;
 }
 @media ${device.laptopL} {
  margin: 16px 0 11px;
  font-size: 20px;
 }
 @media ${device.desktopS} {
   font-size: 22px;
   border-bottom: 4px solid ${props => props.theme.color.gray};
 }
`
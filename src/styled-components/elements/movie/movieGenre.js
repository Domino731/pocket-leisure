import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const MovieGenresList = styled.ul`
  width: 100%;
  height: 714px;
  margin-bottom: 21px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-template-areas:
  "Action Action Action Action Adventure Adventure"
  "Animation  Animation Comedy Comedy  Comedy Comedy"
  "Crime Crime Crime Crime Crime Crime"
  "Documentary Documentary Documentary Drama Drama Drama"
  "Family Family Family Family Family Family"
  "Fantasy Fantasy Fantasy History History History"
  "Horror Horror Horror Horror Music Music"
  "Mystery Mystery Mystery Romance Romance Romance"
  "ScienceFiction ScienceFiction ScienceFiction ScienceFiction ScienceFiction ScienceFiction"
  "TVMovie TVMovie TVMovie Thriller Thriller Thriller"
  "War War War War War War"
  "Western Western Western Western Western Western";

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 752px;
  }
  @media ${device.mobileXL} {
    height: 912px;
  }
  @media ${device.tablet} {
    height: 957px;
  }
  @media ${device.laptop} {
    height: 759px;
  }
  @media ${device.laptop} {
    height: 984px;
  }
`
export const MovieGenreItem = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 11px;
  flex-shrink: 0;


  img {
    align-self: flex-start;
  }

  &:last-child {
    margin-bottom: 35px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL}{
    margin-bottom: 37px;
  }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL}{
    margin-bottom: 16px;
  }
  @media ${device.mobileXL} {
    padding: 7px;
    width: 33.33%;
    flex-direction: column;
  }
  @media ${device.tablet} {
    width: 25%;
    margin-bottom: 4px;
  }
  @media ${device.laptop}{
    width: 20%;
  }
  @media ${device.laptopM}{
    width: 16.66%;
  }
  @media ${device.desktopS} {
    width: 14.28%;
  }
`

export const MovieItemContent = styled.div`
  width: calc(100% - 123px);
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    width: calc(100% - 132px);
  }
  @media ${device.mobileL}{
    width: calc(100% - 176px);
  }
  @media ${device.mobileXL} {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`
export const MovieRating = styled.div`
  min-width: 88px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0.6em;
  background: ${props => props.theme.color.main};
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  box-shadow: 0 0 12px ${props => props.theme.color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    border-radius: 15px;
    min-width: 110px;
  }
  @media ${device.mobileXL} {
    position: static;
    height: 30px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 0;
    i{
      margin-right: 0.4em;
    }
    }
  @media ${device.laptop} {
    border-radius: 11px;
    height: 27px;
  } 
  @media ${device.laptopL} {
    height: 30px;
    border-radius: 12px;
    margin: 9px 0;
  }
  @media ${device.desktopS} {
    height: 34px;
    border-radius: 13px;
    margin: 10px 0;
  }
`
export const MoviePosterSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 109px;
  height: 155px;
  border-radius: 7px;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.main};
  margin-right: 0.625rem;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 3;
   img{
     width: 100%;
     height: 100%;
     object-fit: cover;
   }

  ///////////
  // media //
  ///////////
   @media ${device.mobileM} {
    width: 130px;
    height: 195px;
    border-radius: 13px;
   }
   @media ${device.mobileL} {
    width: 160px;
    height: 243px;
    border-radius: 14px;
   }
   @media ${device.mobileXl} {
    width: 100%;
    height: 286px;
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
export const MoviePosterSmallMissing = styled(MoviePosterSmall)`
box-shadow: 0 0 84px ${props => props.theme.color.missingBlack} inset;
flex-direction: column;
img {
  margin: 0 auto;
  width: 50%;
  height: auto;
  align-items: center;
}
`
import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const GamesElementTitle = styled.h2`
  display: flex;
  align-items: center;
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
`
export const GamesList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  list-style-type: none;

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {

  }
`
export const GameSingleContainer = styled.li`
  list-style-type: none;
  width: 97%;
  margin-bottom: 33px;
  flex-grow: 1;
  padding: 7px;
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    margin-bottom: 37px;
  }

  @media ${device.mobileL} {
    width: 50%;
    padding: 0 4px;
    margin-bottom: 45px;
  }
  @media ${device.mobileXL} {
    margin-bottom: 18px;
    width: 33.33%;
  }
  @media ${device.tablet} {
    width: 25%;
    margin-bottom: 18px;
  }
  @media ${device.laptop} {
    width: 20%;
    margin-bottom: 23px;
  }
  @media ${device.laptopM} {
    width: 16.66%;
    margin-bottom: 29px;
  }
  @media ${device.laptopL} {
    margin-bottom: 32px;
  }
  @media ${device.desktopS} {
    width: 14.28%;
    margin-bottom: 41px;
  }
`
export const GameSingleImg = styled.div`
  width: 100%;
  height: 183px;
  border-radius: 13px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
   ///////////
  // media //
  ///////////
   @media screen and (min-width: 355px){
    height: 262px;
  }
  @media ${device.mobileL} {
    border-radius: 18px;
    height: 262px;
  }
  @media screen and (min-width: 386px){
    height: 271px;
  }
  @media screen and (min-width: 510px){
    height: 281px;
  }
  @media ${device.mobileXL} {
    height: 254px;
  }
  @media screen and (min-width: 651px){
    height: 271px;
  }
  @media screen and (min-width: 710px){
    height: 278px;
  }
  @media ${device.tablet} {
    height: 268px;
  }
  @media screen and (min-width: 840px){
    height: 282px;
  }
  @media screen and (min-width: 950px){
    height: 296px;
  }
  @media ${device.laptop} {
    border-radius: 14px;
    height: 260px;
  }
  @media screen and (min-width: 1150px){
    height: 275px;
  }
  @media ${device.laptopM} {
    height: 252px;
  }
  @media screen and (min-width: 1360px){
    height: 283px;
  }
  @media ${device.laptopL} {
    border-radius: 18px;
    height: 313px;
  }
  @media screen and (min-width: 1500px){
    height: 323px;
  }
  @media ${device.desktopS} {
    border-radius: 21px;
    height: 359px;
  }
`
export const GameMissingImg = styled(GameSingleImg)`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 84px ${props => props.theme.color.missingBlack} inset;
img{
  width: 50%;
  height: auto;
}
`
export const GameSingleTitle = styled.h3`
  font-weight: bold;
  margin: 0.4em 0;
  font-size: 1.2em;
  letter-spacing: 0.063rem;
`
export const GameSinglePlatforms = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const GameSinglePlatform = styled.li`
  box-sizing: border-box;
   font-size: 10px;
   padding: 0.6em;
   background: ${props => props.theme.color.main};
   box-shadow: 0 0 15px ${props => props.theme.color.black} inset;
   border-radius: 50%;
   margin: 0.3em;
   @media ${device.mobileM}{
     font-size: 11px;
   }
   @media ${device.mobileL}{
     box-shadow: 0 0 17px ${props => props.theme.color.black} inset;
   }
   @media ${device.mobileXL}{
     font-size: 9px;
   }
   @media ${device.tablet}{
     font-size: 8px;
   }
   @media screen and (min-width: 840px){
     font-size: 9px;
  }
  @media screen and (min-width: 950px){
    font-size: 10px;
  }
   @media ${device.laptop}{
     font-size: 9px;
     box-shadow: 0 0 13px ${props => props.theme.color.black} inset;
   }
   @media ${device.laptopL} {
   font-size: 10px;
   }
   @media ${device.desktopS}{
    font-size: 9px;
    box-shadow: 0 0 15px ${props => props.theme.color.black} inset;
   }
   img {
    width: 2.3em;
    height: 2.3em;
  }
`
export const GameSingleReleased = styled.span`
  display: block;
  font-size: 1.2em;
  margin-bottom: 0.7em;
  color: ${props => props.theme.color.gray};
`
export const GameSingleRatingsBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 10px;
  ///////////
  // media //
  ///////////

  @media ${device.mobileM} {
    font-size: 11px;
    margin-top: 16px;
  }
  @media ${device.mobileL} {
    font-size: 9px;
    margin-top: 15px;
    padding: 0 3px;
  }
  @media ${device.mobileXL} {
    font-size: 9px;
    margin-top: 11px;
  }
  @media ${device.tablet} {
    margin-top: 12px;
    font-size: 8px;
  }
  @media screen and (min-width: 840px){
    font-size: 9px;
  }
  @media screen and (min-width: 950px){
    font-size: 10px;
  }
  @media ${device.laptop} {
    margin-top: 8px;
    font-size: 8px;
  }
  @media ${device.laptopM} {
    margin-top: 7px;
    font-size: 9px;
 }
 @media ${device.laptopL} {
   font-size: 10px;
 }
 @media ${device.desktopS}{
    font-size: 10px;
    margin-top: 10px;
 }
`
export const GameSingleRating = styled.div`
  font-size: 1.5em;
  padding: 0.4em 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
   
  border-radius: 0.6em;
  box-shadow: 0 0 12px ${props => props.theme.color.yellow};;
  background: ${props => props.theme.color.yellow};
  span {
    display: block;
    margin-left: 0.7em;
  }
`
export const GameSingleRatingMetacritic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    margin-right: 17px;
  }

  img {
    width: 3.2em;
    height: auto;
    margin-right: 0.7em;
  }
  span {
    font-size: 1.5em;
  }
`

export const GamesGenresList = styled.ul`
  width: 100%;
  height: 591px;
  margin-bottom: 21px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
  "action action action  action indie indie"
  "adventure adventure rpg rpg rpg rpg "
  "strategy strategy strategy shooter shooter shooter"
  "casual casual  puzzle puzzle simulation  simulation"
  "arcade arcade arcade arcade arcade arcade"
  "racing racing platformer platformer platformer platformer"
  "sports sports fighting fighting fighting fighting"
  "family family family boardgames boardgames boardgames"
  "massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer"
  "educational educational educational educational card card";

  @media ${device.mobileM} {
    height: 621px;
  }
  @media ${device.mobileL} {
    height: 733px;
  }
  @media ${device.mobileXL} {
    height: 765px;
  }
  @media ${device.tablet} {
    height: 793px;
  }
   @media ${device.laptop} {
    height: 634px;
  }
  @media ${device.laptopL} {
    height: 826px;
  }
  @media ${device.desktopS} {
    height: 923px;
  }
`
export const GamesSortForm = styled.form`
  width: 100%;
  overflow: hidden;
`

export const GameSingleTitleScale = styled.div`
font-size: 10px;
@media ${device.mobileM} {
  font-size: 12px;
 }
 @media ${device.mobileL}{
   font-size: 14px;
 }
 @media ${device.mobileXL} {
   font-size: 12px;
 }
 @media screen and (min-width: 950px){
    font-size: 13px;
  }
  @media ${device.laptop} {
   font-size: 12px;
 }
 @media ${device.laptopL} {
   font-size: 13px;
 }
`
import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const GamesElementTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 1.563rem 0 0.625rem;
  transition: 0.1s;
`
export const GamesList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
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

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    margin-bottom: 37px;
  }

  @media ${device.mobileL} {
    margin-bottom: 45px;
  }
  @media ${device.mobileXL} {
    margin-bottom: 51px;
  }
  @media ${device.tablet} {
    width: 33.33%;
    padding: 0 8px;
    margin-bottom: 18px;
  }
  @media ${device.laptop} {
    width: 25%;
    padding: 0 9px;
    margin-bottom: 23px;
  }
  @media ${device.laptopM} {
    padding: 0 12px;
    margin-bottom: 29px;
  }
  @media ${device.laptopL} {
    width: 339px;
  }
`
export const GameSingleImg = styled.img`
  width: 100%;
  height: 183px;
  object-fit: cover;
  border-radius: 13px;
  @media ${device.mobileL} {
    border-radius: 18px;
    height: 262px;
  }
  @media ${device.mobileXL} {
    height: 341px;
  }
  @media ${device.tablet} {
    height: 351px;
  }
  @media ${device.laptop} {
    border-radius: 14px;
    height: 260px;
  }
  @media ${device.laptopM} {
    height: 384px;
  }
  @media ${device.laptop} {
    border-radius: 18px;
    height: 412px;
  }
`
export const GameSingleTitle = styled.h3`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0.4em 0;
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
   box-shadow: 0 0 29px ${props => props.theme.color.gray} inset;
   border-radius: 50%;
   margin: 0.3em;
   @media ${device.mobileM}{
     font-size: 11px;
   }
   @media ${device.mobileL}{
     font-size: 13px;
   }
   @media ${device.mobileXL}{
     font-size: 14px;
   }
   @media ${device.tablet}{
     font-size: 11px;
   }
   @media ${device.laptop}{
     font-size: 9px;
   }
   @media ${device.laptopL} {
   font-size: 11px;
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
    font-size: 13px;
    margin-top: 22px;
  }
  @media ${device.mobileXL} {
    font-size: 14px;
    margin-top: 24px;
  }
  @media ${device.tablet} {
    margin-top: 17px;
    font-size: 10px;
  }
  @media ${device.laptop} {
    margin-top: 10px;
    font-size: 9px;
  }
  @media ${device.laptopM} {
    margin-top: 17px;
   font-size: 10px;
 }
 @media ${device.laptopL} {
   font-size: 12px;
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
  @media ${device.laptopL} {
    height: 826px;
  }
`
export const GamesSortForm = styled.form`
  width: 100%;
  overflow: hidden;
`

export const GameMissingImg = styled.div`
  width: 100%;
  height: 183px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.main};
  font-size: 143px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 199px;
  }

  @media ${device.mobileM} {
    height: 233px;
  }

  @media ${device.tablet} {
    height: 430px;
    font-size: 210px;
  }

  @media ${device.laptop} {
    height: 430px;
  }

  @media ${device.laptopL} {
    height: 430px;
  }
`

export const GameSingleTitleScale = styled.div`
font-size: 10px;
@media ${device.mobileM} {
  font-size: 12px;
 }
 @media ${device.mobileL}{
   font-size: 14px;
 }
 @media ${device.mobileXL}{
   font-size: 15px;
 }
 @media ${device.tablet} {
  font-size: 12px;
 }
 @media ${device.laptop} {
   font-size: 9px;
 }
 @media ${device.laptopM} {
   font-size: 10px;
 }
 @media ${device.laptopL} {
   font-size: 12px;
 }
`
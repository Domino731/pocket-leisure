import styled from "styled-components";
import {
    MovieDescription,
    MovieDetail,
    MovieGenreList, MovieItemTitle,
    MovieRating,
    MovieTitle,
    MovieVideos,
    MovieVideosSwitch
} from "../movie/movie";
import {FactsTable} from "../../general/general-styles";
import {device} from "../../general/breakpoints";

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
  width: 300px;
  margin-bottom: 43px;


  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    width: 360px;
  }

  @media ${device.mobileL} {
    width: 420px;
  }

  @media ${device.tablet} {
    width: 330px;
    margin-right: 25px;
    margin-left: 25px;
  }
  @media ${device.laptop} {
    width: 300px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media ${device.laptopL} {
    width: 318px;
  }
`
export const GameSingleImg = styled.img`
  width: 100%;
  height: 183px;
  object-fit: cover;
  border-radius: ${props => props.theme.border_radius.l};
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 199px;
  }

  @media ${device.mobileL} {
    height: 233px;
  }

  @media ${device.tablet} {
    height: 420px;
  }
  @media ${device.tablet} {
    height: 430px;
  }
`
export const GameSingleTitle = styled.h3`
  font-weight: bold;
  margin: 0.75rem 0.125rem;
  letter-spacing: 0.063rem;
`
export const GameSinglePlatforms = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`
export const GameSinglePlatform = styled.li`
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 3px;
    background: ${props => props.theme.color.main};
    border-radius: 50px;
    box-shadow: 0 0 4px ${props => props.theme.color.main};

    ///////////
    // media //
    ///////////
    @media ${device.tablet} {
      width: 44px;
      height: 44px;
    }
  }
`
export const GameSingleReleased = styled.span`
  display: block;
  margin-bottom: 7px;
`
export const GameSingleRatingsBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    margin-top: 22px;
  }
`
export const GameSingleRating = styled.div`
  width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.border_radius.s};
  box-shadow: 0 0 12px ${props => props.theme.color.yellow};;
  background: ${props => props.theme.color.yellow};

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    width: 136px;
    height: 50px;
  }

  span {
    display: block;
    margin-left: 7px;
  }
`
export const GameSingleRatingMetacritic = styled.div`
  width: 112px;
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
    width: 32px;
    height: auto;
    margin-right: 7px;
  }
`

export const GamesGenresList = styled.ul`
  width: 100%;
  height: 1100px;
  margin-bottom: 80px;
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
`
export const GamesSortForm = styled.form`
  width: 100%;
  overflow: hidden;
`

export const GameMissingImg = styled.div`
  width: 300px;
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
    width: 360px;
    height: 199px;
  }

  @media ${device.mobileM} {
    width: 420px;
    height: 233px;
  }

  @media ${device.tablet} {
    width: 333px;
    height: 430px;
    font-size: 210px;
  }

  @media ${device.laptop} {
    width: 300px;
    height: 430px;
  }

  @media ${device.laptopL} {
    width: 318px;
    height: 430px;
  }
`
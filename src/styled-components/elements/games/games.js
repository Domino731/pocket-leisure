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


export const GameRow = styled.div`
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: flex;
    margin-top: 15px;
  }
`
export const GamePosterContainer = styled.div`
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: none;
  }

`
export const GamePosterMissing = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 217px;
  border-radius: ${props => props.theme.border_radius.l};
  border: 3px solid ${props => props.theme.color.white};
  i{
    transform: rotate(-30deg);
  }

`
export const GamePosterContainerDesktop = styled.div`
  display: none;

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: block;
    width: 40%;
    img {
      height: 500px;
    }
  }

  @media ${device.laptopL} {
    img {
      height: 703px;
    }
  }
`
export const GameIntroductionContainer = styled.div`
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    width: 60%;
    padding-left: 20px;
  }
`
export const GameTitle = styled(MovieTitle)`
  margin-top: 14px;
`
export const GameItemTitle = styled(MovieItemTitle)``
export const GamePremiere = styled(MovieDetail)`
`
export const GameGenreList = styled(MovieGenreList)`
`
export const GameRating = styled(MovieRating)`
  div {
    &::before {
      width: ${props => (2 * (props.rating * 10) + "%")};
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    div {
      width: 335px;
      height: 40px;
      margin-left: -7px;
    }
  }

  @media ${device.tablet} {
    div {
      width: 700px;
      height: 49px;
    }
  }

  @media ${device.laptop} {
    div {
      width: 505px;
      margin-left: -10px;
    }
  }

  @media ${device.laptopL} {
    div {
      width: 766px;
    }
  }
`
export const GameRatingMetacritic = styled(MovieRating)`
  img {
    width: 42px;
    height: auto;
  }

  i {
    box-shadow: 0 0 14px ${props => props.theme.color.yellow};
    background: ${props => props.theme.color.yellow};
  }

  div {
    &::before {
      width: ${props => ((props.rating) + "%")};
      background: ${props => props.theme.color.yellow};
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    img {
      width: 50px;
    }

    div {
      width: 505px;
      margin-left: -10px;
    }
  }
  @media ${device.laptopL} {
    div {
      width: 766px;
    }
  }
`


export const GameDescription = styled(MovieDescription)`
`
export const GameFacts = styled(FactsTable)`
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: none;
  }
`
export const GameFactsDesktop = styled(FactsTable)`
  display: none;
  margin-top: 20px;
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: block;
  }
`

export const GameTrailersContainer = styled.div`

`

export const GameTrailers = styled(MovieVideos)``

export const GameMediaSwitch = styled(MovieVideosSwitch)`

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    height: 42px;
  }

`

export const GameScContainer = styled.div`
  margin-top: 61px;

  img {
    width: 100%;
    height: auto;
  }
`
export const GameAdditionsContainer = styled.div`

`
export const GameAdditions = styled.ul`
  width: 100%;
  display: flex;
  overflow: auto;
  padding-bottom: 13px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }
`

export const GameAddition = styled.li`
  margin-right: 13px;
  width: 134px;

  transition: 0.2s;

  h3:hover {
    transition: 0.2s;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.main};;
  }

  img {
    width: 100%;
    height: 75px;
    object-fit: cover;
    margin-right: 17px;
  }

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    margin-right: 17px;
    font-size: 4.5rem;
    text-decoration: none;
  !important;
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    width: 154px;
    margin-right: 20px;
  }

  @media ${device.laptop} {
    width: 250px;
    img {
      height: 141px;
    }

    strong {
      height: 141px;
      font-size: 145px;
    }
  }

  @media ${device.laptopL} {
    width: 320px;
    img {
      height: 177px;
    }

    strong {
      height: 177px;
      font-size: 145px;
    }
  }
`

export const GameStoresContainer = styled.div``

export const GameStores = styled.ul`
`
export const GameStore = styled.li`
  padding: 11px 6px;

  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.main};;
  }

  i {
    margin-right: 7px;
    color: ${props => props.theme.color.main}
  }
`

export const GameSeriesContainer = styled.div``

export const GameSeries = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const GameSeriesSingle = styled.li`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 17px;
  border-radius: ${props => props.theme.border_radius.m};

  img {
    z-index: -1;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 200px;
    padding: 0 10px;
    padding-top: 1.188rem;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 58, 64, 0.2));
    text-align: center;
    font-size: 1.188rem;
    
    transition: 0.2s;
    &:hover{
      transition: 0.2s;
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(52, 58, 64, 0.4));
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    img {
      height: 240px;
    }

    h3 {
      height: 240px;
    }
  }

  @media ${device.tablet} {
    img {
      height: 264px;
    }

    h3 {
      height: 264px;
    }
  }

  @media ${device.laptop} {
    width: 480px;
    margin-right: 16px;
    margin-left: 16px;
  }
  @media ${device.laptopL} {
    width: 446px;
  }
`

export const GameSeriesMissing = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 75px;
    color: ${props => props.theme.color.main};
  }
`
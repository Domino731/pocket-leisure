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
import {StatTable} from "../../general/general-styles";

export const GamesElementTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 1.563rem 0 0.625rem;
  transition: 0.1s;
`
export const GamesList = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
export const GameSingleContainer = styled.div`
  width: 300px;
  margin-bottom: 43px;
`
export const GameSingleImg = styled.img`
  width: 100%;
  height: 183px;
  object-fit: cover;
  border-radius: ${props => props.theme.border_radius.l};
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
`
export const GameSingleRating = styled.div`
  width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.border_radius.s};
  box-shadow: 0 0 12px ${props => props.theme.color.yellow};;
  background: ${props => props.theme.color.yellow};

  span {
    margin-left: 7px;
  }
`
export const GameSingleRatingMetacritic = styled.div`
  width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  "action action action  indie indie indie"
  "adventure adventure adventure rpg rpg rpg "
  "strategy strategy strategy shooter shooter shooter"
  "casual casual  puzzle puzzle simulation  simulation"
  "arcade arcade arcade arcade arcade arcade"
  "racing racing platformer platformer platformer platformer"
  "sports sports fighting fighting fighting fighting"
  "family family family boardgames boardgames boardgames"
  "massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer massivelymultiplayer"
  "educational educational educational educational card card";
  gap: 14px;
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
`
export const GameDescription = styled(MovieDescription)`
`
export const GameFacts = styled(StatTable)`
`
export const GameRatingMetacritic = styled(MovieRating)`
  img {
    width: 36px;
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
`
export const GameTrailersContainer = styled.div`

`

export const GameTrailers = styled(MovieVideos)``

export const GameMediaSwitch = styled(MovieVideosSwitch)``

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
  img {
    width: 134px;
    height: 75px;
    object-fit: cover;
    margin-right: 17px;
  }

  strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 134px;
    height: 75px;
    margin-right: 17px;
    font-size: 4.5rem;
  }
`

export const GameStoresContainer = styled.div``

export const GameStores = styled.ul`
`
export const GameStore = styled.li`
  padding: 11px 6px;

  i {
    margin-right: 7px;
    color: ${props => props.theme.color.main}
  }
`

export const GameSeriesContainer = styled.div``

export const GameSeries = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;
`
export const GameSeriesSingle = styled.li`
  position: relative;
  img {
    z-index: -1;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  h3{
    position: absolute;
    top:0;
    width: 100%;
    height: 200px;
    padding-top: 1.188rem;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 58, 64, 0.2));
    text-align: center;
    font-size: 1.188rem;
  }
`
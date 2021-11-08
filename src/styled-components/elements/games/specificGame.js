import styled from "styled-components";
import {device} from "../../general/breakpoints";
import {
    MovieDescription,
    MovieDetail,
    MovieGenreList,
    MovieItemTitle,
    MovieRating,
    MovieTitle,
    MovieVideos, MovieVideosSwitch
} from "../movie/movie";
import {FactsTable} from "../../general/general-styles";

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

  i {
    transform: rotate(-30deg);
  }

`
export const GamePosterContainerDesktop = styled.div`
  display: block;
  width: 40%;

  img {
    height: 500px;
  }

  ///////////
  // media //
  ///////////
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

 
`
export const GameRatingMetacritic = styled(MovieRating)`
div{
  background-color: ${props => props.theme.color.yellow};
}
  img {
    width: 42px;
    height: auto;
  }

  span {
    &::before {
      width: ${props => ((props.rating) + "%")};
      background: ${props => props.theme.color.yellow};
    }
  }
`


export const GameDescription = styled(MovieDescription)`
`
export const GameFacts = styled(FactsTable)`

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
    margin-right: 5px;
    margin-left: 5px;
    h3 {
      &:hover {
        transition: 0.2s;
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(52, 58, 64, 0.4));
      }
    }
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
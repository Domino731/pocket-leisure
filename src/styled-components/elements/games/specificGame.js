import styled from "styled-components";
import { device } from "../../general/breakpoints";
import {
  MovieDescription,
  MovieDetail,
  MovieGenreList,
  MovieItemTitle,
  MovieRating,
  MovieTitle,
  MovieVideos, MovieVideosSwitch
} from "../movie/movie";
import { FactsTable } from "../../general/general-styles";

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


  span {
    &::before {
      width: ${props => ((props.rating) + "%")};
      background: ${props => props.theme.color.yellow};
    }
  }
`


export const GameDescription = styled(MovieDescription)``

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

export const GameTrailer = styled(MovieVideos)``

export const GameMediaSwitch = styled(MovieVideosSwitch)`

`

export const GameScContainer = styled.div`
  margin-top: 51px;

  img {
    width: 100%;
    height: auto;

  }
   ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    margin-top: 57px;
  }
  @media ${device.tablet} {
    margin-top: 61px;
  }
  @media ${device.laptop} {
    margin-top: 57px;
  }
`
export const GameAdditionsContainer = styled.div`

`
export const GameAdditions = styled.ul`
  width: 100%;
  display: flex;
  overflow: auto;
  padding-bottom: 12px;
  margin-bottom: 22px;
  padding-left: 10px;
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
  @media ${device.mobileL} {
   padding-bottom: 14px;
   margin-bottom: 25px;
  }
  @media ${device.tablet} {
   padding-bottom: 17px;
   margin-bottom: 28px;
  }
  @media ${device.laptop} {
    flex-wrap: wrap;
    padding-bottom: 13px;
   margin-bottom: 22px;
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
  ///////////
  // media //
  ///////////
  @media ${device.mobileXL} {
    height: 129px;
  }
  @media ${device.tablet} {
    height: 169px;
  }
  @media ${device.laptop} { 
    height: 183px;
  }
  @media ${device.laptopL} {
    height: 198px;
  }
  @media ${device.desktopS} {
    height: 245px;
  }
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
  @media ${device.mobileXL} {
    margin-right: 16px;
    width: 162px;
  }
  @media ${device.tablet} {
    margin-right: 18px;
    width: 184px;
  }
  @media ${device.laptop} {
    margin-top: 3px;
    margin-right: 13px;
    width: 206px;
  }
  @media ${device.laptopL} {
    margin-top: 6px;
    margin-right: 18px;
    width: 259px;
  }
  @media ${device.desktopS} {
    margin-top: 9px;
    margin-right: 24px;
    width: 302px;
  }
`

export const GameStoresContainer = styled.div``

export const GameStoresList = styled.ul`
`
export const GameStoreItem = styled.li`
  padding: 4px 0;
  transition: 0.2s;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    padding: 6px 0;
  }
  @media ${device.mobileXL} {
    padding: 7px 0;
  }
  @media ${device.tablet} {
    padding: 9px 0;
  }
  @media ${device.laptop} {
    padding: 6px 0;
  }
  @media ${device.laptopL} {
    padding: 8px 0;
  }
  img {
    width: 1em;
    object-fit: cover;
    margin: 0 0.4em;
  }
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

export const GameSeriesContainer = styled.div`

`

export const GameSeriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  
  ///////////
  // media //
  ///////////
  @media ${device.mobileXL} {
    justify-content: space-between;
    padding: 10px;
  }
`
export const GameSeriesItem = styled.li`
  position: relative;
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 17px;
  border-radius: 13px;
  height: 200px;
  img {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  strong {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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
    border-radius: 18px;
  }
  @media ${device.mobileXL} {
    width: 47%;
    margin-top: 10px;
    flex-grow: 1;
    margin: 7px 9px;
    height: 235px;
  }
  @media ${device.tablet} {
    height: 265px;
  }
  @media ${device.laptop}{
    border-radius: 14px;
     width: 30%;
     height: 190px;
  }
  @media ${device.laptopM} {
    height: 204px;
  }
  @media ${device.laptopL} {
    border-radius: 18px;
    height: 232px;
    width: 23%;
  }
  @media ${device.desktopS} {
    border-radius: 21px;
  }
`

export const GameSeriesMissing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 75px;
    color: ${props => props.theme.color.main};
  }
`
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
import { getRatingColor } from "../../../functions/getRatingColor";

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
      height: 620px;
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
      width: ${props => (2 * (props.rating * 10) + 2 + "%")};
    }
  }

 
`
export const GameRatingMetacritic = styled(MovieRating)`
div{
  background-color: ${props => props.theme.color.yellow};
}


  span {
    &::before {
      width: ${props => ((props.rating + 3) + "%")};
      background: ${props => getRatingColor(props.rating)};
       
      
      
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
 ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    width: 81%;
    margin: 0 auto;
  }
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
    margin: 0 auto;
    margin-top: 57px;
    width: 81%;
  }
`
export const GameAdditionsContainer = styled.div`
a {
  width: 100%;
}
`

export const GameAddition = styled.div`
width: 100%;
  margin-right: 10px;
  transition: 0.2s;
text-align: center;
  h3:hover {
    transition: 0.2s;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.main};;
  }

`
export const GameAdditionGraphic = styled.div`
width: 100%;
height: 144px;
border-radius: 7px;
overflow: hidden;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  &:hover {
    @media ${device.laptop} {
      transform: scale(110%);
    }
  }
}

  ///////////
  // media //
  /////////// 
  @media screen and (min-width: 351px) {
    height: 154px;
  }
  @media ${device.mobileM} {
    height: 171px;
    border-radius: 9px;
  }
  @media ${device.mobileL} {
    height: 167px;
    border-radius: 11px;
  }
  @media screen and (min-width: 471px) {
    height: 159px;
  }
  @media screen and (min-width: 533px) {
    height: 177px;
  }
  @media ${device.mobileXL} {
    height: 198px;
  }
  @media ${device.tablet} {
    border-radius: 13px;
  }
  @media ${device.laptopM} {
    height: 217px;
  }
  @media ${device.laptopL} {
    height: 227px;
    border-radius: 16px;
  }
  @media ${device.desktopS} {
    border-radius: 18px;
    height: 252px;
  }
`
export const GameAdditionMissingGraphic = styled(GameAdditionGraphic)`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 127px ${props => props.theme.color.missingBlack} inset;
img {
  width: 26%;
  height: auto;
  object-fit: cover;
}
`
export const GameStoresContainer = styled.div`
padding: 2px 0;
`

export const GameStoresList = styled.ul`
letter-spacing: 0.063rem;
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
  a{
    height: 100%;
      &:hover{
        img {
          @media ${device.laptop} {
        transform: scale(110%);
    }
  }  
    }
  }
  img {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    &:hover{
      @media ${device.laptop} {
        transform: scale(110%);
      }
    }
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
  box-shadow: 0 0 140px ${props => props.theme.color.missingBlack} inset;
  img {
    width: 17%;
    height: auto;
    object-fit: cover;
    transition: 0.3s;
  }
`
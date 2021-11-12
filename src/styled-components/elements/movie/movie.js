import styled from "styled-components";
import { device } from "../../general/breakpoints";


export const MovieRow = styled.div`
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: flex;
    margin-top: 15px;
  }
`
export const MoviePosterContainer = styled.div`

`
export const MoviePosterContainerDesktop = styled.div`
  width: 40%;
`
export const MovieIntroductionContainer = styled.div`
  background-color: ${props => props.theme.color.black};
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    position: relative;
    box-shadow: 0 -104px 27px 19px #171721;
     /* &::after{
       content: '';
       display: block;
       position: absolute;
       width: 100%;
       height: 192px;
       top: -188px;
       background: rgba(23,23,33,0.5);
       filter: blur(10px);
       box-shadow: inset 0 0 2000px rgb(23 23 33 / 90%), 0 0 64px 89px rgb(23 23 33 / 90%)
     } */
  }
  @media ${device.laptop} {
    width: 60%;
    padding-left: 20px;

    ///////////
    // media //
    ///////////
    @media ${device.laptop} {
      justify-content: flex-start;
      margin-top: 20px;
      &::-webkit-scrollbar {
        height: 12px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.color.main};
        border-radius: 6px;
      }
    }
  }

  @media ${device.laptopL} {
    padding-left: 40px;
  }
`
export const MovieMediaContainer = styled.div`
  @media ${device.laptop} {
    width: 100%;
  }
`

export const MovieFactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
export const MovieFactsContainerDesktop = styled.div`
  display: none;
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: block;
    margin-top: 30px;
  }
`
export const MovieDirector = styled.strong`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 40px;
  background: ${props => props.theme.color.black};
  z-index: 12;
  box-shadow: 0 -25px 42px ${props => props.theme.color.black},
    0 -25px 42px ${props => props.theme.color.black},
    0 -69px 38px ${props => props.theme.color.black}, 0 -65px 36px ${props => props.theme.color.black};

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    margin-top: ${props => props.HasAPoster ? `-155px;` : `40px`};
  }
  @media ${device.mobileXL} {
    margin-top: ${props => props.HasAPoster ? `-403px;` : `40px`};
  }
  @media ${device.tablet} {
    margin-top: ${props => props.HasAPoster ? `-645px;` : `51px`};
  }
  @media ${device.laptop} {
    justify-content: flex-start;
    margin-top: 0;
  }
`
export const MovieTitle = styled.h1`
  text-align: center;
  font-size: 1.625rem;

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    text-align: left;
    margin-top: 4px;
  }
`
export const MovieDetail = styled.div`
  text-align: center;
  margin-top: 0.813rem;
  color: ${props => props.theme.color.gray};

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    text-align: left;
    margin-top: 9px;
  }
`
export const MovieGenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  overflow: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }

  a {
    margin: 0.2em 0.3em;
    display: block;
    padding: 0.5rem 0.938rem;
    background: ${props => props.theme.color.main};
    border-radius: 11px;
    box-shadow: 0 0 7px ${props => props.theme.color.main};
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }
    @media ${device.mobileL}{
      border-radius: 15px;
    }
    @media ${device.tablet}{
      border-radius: 18px;
    }
    @media ${device.laptop}{
      border-radius: 11px;
    }
    @media ${device.laptopL} {
      border-radius: 14px;
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`
export const RatingIconWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.color.main};
  z-index: 1;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    width: 55px;
    height: 55px;
  }
  @media ${device.mobileL} {
    width: 59px;
    height: 59px;
  }
  @media ${device.tablet} {
    width: 64px;
    height: 64px;
  }
  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
  @media ${device.laptopL} {
    width: 56px;
    height: 56px;
  }
`
export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px auto;
  span {
    display: block;
    width: calc(100% - 62px);
    height: 35px;
    background: ${props => props.theme.color.white};
    margin-left: -9px;
    border-radius: 0 20px 20px 0;
    position: relative;
    text-align: center;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: -6px;
      height: 100%;
      width: ${props => ((props.rating * 10) + "%")};
      background: ${props => props.theme.color.main};
      transform: skew(17deg, 0deg);
    }

    ///////////
    // media //
    ///////////
    @media ${device.mobileM} { 
      height: 37px;
      margin-left: -7px;
    }
    @media ${device.mobileL} { 
      height: 39px;
      margin-left: -13px;
      border-radius: 0 30px 30px 0;
    }
    @media ${device.tablet} {
      height: 43px;
    }
    @media ${device.laptop} {
      height: 36px;
    }
    @media ${device.laptopL} {
      height: 40px;
    }
  }
 
   ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`

export const MovieTagline = styled.strong`
  margin-top: 32px;
  display: block;
  text-align: center;
  font-size: 1.063rem;
  font-weight: bold;
  letter-spacing: 0.063rem;

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    margin-top: 0;
  }
`
export const MovieDescription = styled.p`
  margin: 18px 8px;
  text-align: justify;
  color: ${props => props.theme.color.gray};
  line-height: 1.375rem;
  letter-spacing: 0.063rem;
  @media ${device.mobileL} {
    margin: 22px 8px;
  }
  @media ${device.tablet} {
    margin: 26px 8px;
  }
  @media ${device.laptop} {
    margin: 8px 4px;
  }
  @media ${device.laptopL} {
    margin: 14px 10px;
  }
  @media ${device.desktopS} {
    margin: 24px 14px;
  }
`

export const MovieItemTitle = styled.h3`
  margin: 1.563rem 0 0.625rem;
  padding-bottom: 0.25rem;
  border-bottom: 4px solid ${props => props.theme.color.main};
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
`
export const MovieVideos = styled.figure`
  width: 100%;
  height: 0;
  margin-top: 30px;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
export const MovieVideosSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 12px;
  font-size: 1rem;

  button {
    font-size: 1rem;
    font-weight: bold;
    width: 50%;
    flex-grow: 1;
    padding: 0.5em 0;
    background: ${props => props.theme.color.main};
    border: none;
    outline: none;
    border-radius: 80px;
    transition: 0.2s;

    ///////////
    // media //
    ///////////
    @media ${device.mobileXL} {
       border-radius: 80px;
    }
 
    &:focus {
      transition: 0.2s;
      font-size: 19px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.2s;
      letter-spacing: 0.063em;
    }

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }
  }
`
export const MovieActors = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  padding-bottom: 13px;

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
  @media ${device.laptop} {
    overflow: visible;
    flex-wrap: wrap;
    justify-content: space-between;
    &::-webkit-scrollbar {
      height: 12px;
    }
  }
  @media ${device.laptopL} {
    &::-webkit-scrollbar {
      height: 17px;
    }
  }
`
export const MovieActor = styled.div`
  width: 105px;

    ///////////
    // media //
    ///////////
  @media ${device.mobileM} {
    width: 123px;
  }
  @media ${device.mobileL}{
    width: 141px;
  }
  @media ${device.mobileXL}{
    width: 147px;
  }
  @media ${device.tablet} {
    width: 192px;
   
  }
  @media ${device.laptop} {
    width: 168px;
  }
`
export const MovieActorPhotoWrapper = styled.div`
    width: 100%;
    height: 157px;
    height: auto;
    border-radius: 7px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
     ///////////
    // media //
    ///////////
    @media ${device.mobileM} {
    height: 184px;
    border-radius: 9px;
    }
    @media ${device.mobileL} {
    height: 211px;
    border-radius: 11px;
    }
    @media ${device.mobileXL}{
    width: 147px;
  }
    @media ${device.tablet} {
    height: 220px;
    border-radius: 13px;
    }
  
`
export const MovieActorPhotoMissing = styled(MovieActorPhotoWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px ${props => props.theme.color.missingYellow} inset;
  img {
    width: 65%;
  }
`
export const MovieKnowFor = styled.strong`
  color: ${props => props.theme.color.gray};
`


export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const MovieSimilarSingle = styled.li`
   width: 50%;
  overflow: hidden;
  position: relative;
  padding: 7px;
  a {
    width: 100%;
    display: block;
    border-radius: 13px;
    overflow: hidden;
    height: 219px;

  }
  img {
    width: 100%;
    object-fit: cover;
    transition: 0.3s;
    &:hover {
      @media ${device.laptop} {
        transform: scale(110%);
      }
    }
  }
  h3 {
    text-align: center;
  }
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    a{
      height: 260px;
    }
  }

  @media ${device.mobileL} {
    a{
      height: 297px;
    }
  }

  @media ${device.mobileXL} {
    width: 33.33%;
    a{
      height: 291px;
      border-radius: 18px;
    }
  }
  @media ${device.tablet} {
    a{
      height: 365px;
    }
  }
  @media ${device.laptop} {
    width: 25%;
    a{
      height: 363px;
      border-radius: 14px;
    }
  }
  @media ${device.laptopM} {
    width: 20%;
    a{
      height: 363px;
      border-radius: 14px;
    }
  }
  @media ${device.laptopL} {
    a{
      height: 411px;
      border-radius: 18px;
    }
    }
    @media ${device.desktopS} {
    a{
      height: 459px;
      border-radius: 21px;
    }
    }
`
export const MovieSimilarPoster = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const MovieSimilarMissing = styled.div`
 width: 100%;
 height: 219px;
 box-shadow: 0 0 15px ${props => props.theme.color.missingYellow} inset;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 4px;
 img {
   margin: 10px auto 0;
   width: 86px;
 }
 h3 {
   text-align: center;
 }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 260px;
    box-shadow: 0 0 19px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 120px;
    } 
  }
  @media ${device.mobileM} {
    box-shadow: 0 0 24px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 134px;
    } 
  }
  @media ${device.mobileL}{
    height: 297px;
  }
  @media ${device.mobilXL} {
    box-shadow: 0 0 27px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 97px;
    } 
  }
  @media ${device.tablet} {
    height: 363px;
    box-shadow: 0 0 33px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 124px;
    }
  }
  @media ${device.laptopL} {
    height: 411px;
    box-shadow: 0 0 41px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 153px;
    }
  }
  @media ${device.desktopS} {
    height: 459px;
    box-shadow: 0 0 48px ${props => props.theme.color.missingYellow} inset;
    img {
      width: 153px;
    }
  }
`
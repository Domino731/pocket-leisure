import styled from "styled-components";
import {device} from "../../general/breakpoints";


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
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: none;
  }
`
export const MoviePosterContainerDesktop = styled.div`
  display: none;
  width: 40%;
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: block;
  }
`
export const MovieIntroductionContainer = styled.div`
  ///////////
  // media //
  ///////////
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
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    display: none;
  }
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
    margin: 4px 6px;
    display: block;
    padding: 0.5rem 0.938rem;
    background: ${props => props.theme.color.main};
    border-radius: ${props => props.theme.border_radius.s};
    box-shadow: 0 0 7px ${props => props.theme.color.main};
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`
export const MovieRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 60px;
    width: 60px;
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    background: ${props => props.theme.color.main};
    border-radius: 40px;
    margin-left: 0;
    font-size: 2.5rem;
  }

  div {
    width: 235px;
    height: 35px;
    background: ${props => props.theme.color.white};
    margin-left: -5px;
    border-radius: 0 ${props => props.theme.border_radius.l} ${props => props.theme.border_radius.l} 0;
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
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    i {
      height: 70px;
      width: 70px;
    }

    div {
      width: 335px;
      height: 40px;
      margin-left: -7px;
    }
  }

  @media ${device.tablet} {
    i {
      height: 84px;
      width: 84px;
    }

    div {
      width: 700px;
      height: 49px;
    }
  }
  @media ${device.laptop} {
    justify-content: flex-start;
    div {
      width: 490px;
    }
  }

  @media ${device.laptopL} {

    div {
      width: 741px;
    }
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
export const MovieDescription = styled.div`
  margin: 22px 8px;
  text-align: justify;
  color: ${props => props.theme.color.gray};
  line-height: 1.375rem;
  letter-spacing: 0.063rem;
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
    height: 35px;
    background: ${props => props.theme.color.main};
    border: none;
    outline: none;
    border-radius: ${props => props.theme.border_radius.l};
    transition: 0.2s;

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      height: 42px;
    }
    @media ${device.tablet} {
      height: 50px;
    }

    &:focus {
      transition: 0.2s;
      font-size: 19px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.2s;
      font-size: 19px;
    }

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }
  }
`
export const MovieActors = styled.ul`
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

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
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
export const MovieActor = styled.li`
  margin-right: 14px;

  img {
    width: 105px;
    height: auto;
    margin-right: 15px;
    border-radius: ${props => props.theme.border_radius.m};
    object-fit: cover;

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 147px;
    }
  }

  h3 {
    width: 105px;

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 147px;
    }
  }
`
export const MovieActorPhotoMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 158px;
  margin-right: 15px;
  font-size: 4.5rem;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 147px;
    height: 224px;
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
  width: 140px;
  height: 210px;
  margin:  10px;
  border-radius: ${props => props.theme.border_radius.m};
  overflow: hidden;
  position: relative;
  
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    margin: 7px;
    width: 173px;
    height: 259px;
  }

  @media ${device.mobileL} {
    width: 127px;
    height: 190px;
  }

  @media ${device.tablet} {
    width: 173px;
    height: 259px;
  }

  @media ${device.laptop} {
    width: 236px;
    height: 354px;
  }

  @media ${device.laptopL} {
    margin: 9px;
    width: 265px;
    height: 397px;
  }
`
export const MovieSimilarPoster = styled.div`
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const MovieSimilarMissing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  width: 100%;
  height: 100%;
  font-size: 42px;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: ${props => props.theme.border_radius.m};
  border: 3px solid ${props => props.theme.color.main};
  &:hover {
    transition: 0.2s;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(52, 58, 64, 0.4));
  };
  
  h3{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 19px;
    text-align: center;
    z-index: 2;
    font-size: 1.188rem;
    transition: 0.2s;
  
  }
  i {
    color: ${props => props.theme.color.main};
    transform: rotate(-30deg);
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
   font-size: 50px;
  }

  @media ${device.tablet} {
    font-size: 100px;
  }

  @media ${device.laptopL} {
    font-size: 152px;
  }
`
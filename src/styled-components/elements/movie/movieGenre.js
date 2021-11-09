import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const MovieGenresList = styled.ul`
  width: 100%;
  height: 714px;
  margin-bottom: 21px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-template-areas:
  "Action Action Action Action Adventure Adventure"
  "Animation  Animation Comedy Comedy  Comedy Comedy"
  "Crime Crime Crime Crime Crime Crime"
  "Documentary Documentary Documentary Drama Drama Drama"
  "Family Family Family Family Family Family"
  "Fantasy Fantasy Fantasy History History History"
  "Horror Horror Horror Horror Music Music"
  "Mystery Mystery Mystery Romance Romance Romance"
  "ScienceFiction ScienceFiction ScienceFiction ScienceFiction ScienceFiction ScienceFiction"
  "TVMovie TVMovie TVMovie Thriller Thriller Thriller"
  "War War War War War War"
  "Western Western Western Western Western Western";

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 752px;
  }
  @media ${device.mobileXL} {
    height: 912px;
  }
  @media ${device.tablet} {
    height: 957px;
  }
  @media ${device.laptop} {
    height: 759px;
  }
  @media ${device.laptop} {
    height: 984px;
  }
`
export const MovieGenreItem = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 20px;
  flex-shrink: 0;


  img {
    align-self: flex-start;
  }

  &:last-child {
    margin-bottom: 35px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL}{
    margin-bottom: 37px;
  }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL}{
    margin-bottom: 23px;
  }
  @media ${device.tablet} {
    padding: 7px;
    width: 33.33%;
    flex-direction: column;
  }
`

export const MovieItemContent = styled.div`
  width: calc(100% - 123px);
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    width: calc(100% - 132px);
  }
  @media ${device.mobileL}{
    width: calc(100% - 176px);
  }
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`
export const MovieRating = styled.div`
  min-width: 88px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0.6em;
  background: ${props => props.theme.color.main};
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  box-shadow: 0 0 12px ${props => props.theme.color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    border-radius: 15px;
    min-width: 110px;
  }
  @media ${device.tablet} {
    padding-bottom: 10px;
    position: static;
    height: 39px;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
    i{
      margin-right: 0.4em;
    }
    }
`
export const MoviePosterSmall = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 109px;
  height: 155px;
  border-radius: 7px;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.main};
  margin-right: 0.625rem;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 3;
   img{
     width: 100%;
     height: 100%;
     object-fit: cover;
   }

  ///////////
  // media //
  ///////////
   @media ${device.mobileM} {
    width: 130px;
    height: 195px;
    border-radius: 10px;
   }
   @media ${device.mobileL} {
    width: 160px;
    height: 243px;
    border-radius: 15px;
   }
   @media ${device.tablet} {
    width: 100%;
    height: 344px;
    border-radius: 17px;
   }
`
import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const MovieGenresList = styled.ul`
  width: 100%;
  height: 1200px;
  margin-bottom: 80px;
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
  @media ${device.tablet} {
    height: 1300px;
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
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    flex-direction: column;
    width: 305px;
    margin-right: 25px;
    margin-left: 25px;
    margin-bottom: 40px;
    &:first-child {
      margin-top: 0;
    }
  }
  @media ${device.laptop} {
    width: 301px;
    margin-right: 16px;
    margin-left: 16px;
  }
  @media ${device.laptopL} {
    width: 323px;
  }

`

export const MovieGenreItemDetails = styled.div`
  ///////////
  // media //
  ///////////
  @media ${device.tablet} {

  }
`
export const MovieRating = styled.div`
  min-width: 88px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: ${props => props.theme.border_radius.s};
  background: ${props => props.theme.color.main};
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  box-shadow: 0 0 12px ${props => props.theme.color.main};

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    top: 0;
    z-index: -1;
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 360px;
    padding-left: 34px;
    span {
      margin-top: 8px;
      margin-left: -10px;
    }

    i {
      font-size: 34px;
    }
  }

  i {
    margin-right: 0.5rem;
  }
`
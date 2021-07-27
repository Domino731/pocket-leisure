import styled from "styled-components";
import {device} from "../../general/breakpoints";

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
`
export const MovieTitle = styled.h1`
  text-align: center;
  font-size: 1.625rem;
`
export const MovieDetail = styled.div`
  text-align: center;
  margin-top: 0.813rem;
  color: ${props => props.theme.color.gray};
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
    font-size: 2.5rem;
    

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      height: 70px;
      width: 70px;
    }
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

    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 335px;
      height: 40px;
      margin-left: -7px;
    }
    
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
`

export const MovieTagline = styled.strong`
  margin-top: 32px;
  display: block;
  text-align: center;
  font-size: 1.063rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
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
    
    &:focus {
      transition: 0.2s;
      font-size: 19px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.2s;
      font-size: 19px;
    }
    
    &:first-child{
      margin-right: 5px;
    }
    &:last-child{
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

export const MovieInfo = styled.section`
  display: flex;
  flex-direction: column;
`

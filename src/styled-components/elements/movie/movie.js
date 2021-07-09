import styled from "styled-components";

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
  justify-content: center;
  margin-top: 15px;
  overflow: auto;
  overflow-y: hidden;
  padding-bottom: 5px;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }

  a {
    display: block;
    padding: 0.438rem 0.938rem;
    background: ${props => props.theme.color.main};
    border-radius: ${props => props.theme.border_radius.s};
    margin-left: 7px;
    box-shadow: 0 0 7px ${props => props.theme.color.main};
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
    font-size: 1.688rem;
  }

  div {
    width: 235px;
    height: 35px;
    background: ${props => props.theme.color.white};
    margin-left: -5px;
    border-radius: 0 ${props => props.theme.border_radius.l} ${props => props.theme.border_radius.l} 0;
    position: relative;
    text-align: center;
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
export const MovieDescription = styled.div`
  margin: 42px 22px;
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
  box-shadow: 0 1px ${props => props.theme.color.main};
`
export const MovieActors = styled.ul`
  width: 100%;
  display: flex;
  overflow: auto;
  padding-bottom: 10px;
  margin-bottom: 115px;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }
`
export const MovieActor = styled.li`
  img {
    width: 105px;
    height: auto;
    margin-right: 15px;
    border-radius: ${props => props.theme.border_radius.m};
    object-fit: cover;
  }
`
export const MovieKnowFor = styled.strong`
  color: ${props => props.theme.color.gray};
`
import styled from "styled-components";

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
  padding: 0.625rem 1.25rem;
  background: ${props => props.theme.color.main};
  border-radius: ${props => props.theme.border_radius.s};
  box-shadow: 0 0 7px ${props => props.theme.color.main};
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
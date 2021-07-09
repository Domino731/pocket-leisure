import styled from "styled-components";

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
  gap: 14px;
`
export const MovieGenreItem = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 20px;
  flex-shrink: 0;

  img {
    align-self: flex-start;
  }
  &:first-child{
    margin-top: 35px;
  }
  &:last-child{
    margin-bottom: 35px;
  }
`
export const MovieRating = styled.strong`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: ${props => props.theme.border_radius.s};
  background: ${props => props.theme.color.main};
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  box-shadow: 0 0 12px ${props => props.theme.color.main};
  i {
    margin-right: 0.5rem;
  }
`
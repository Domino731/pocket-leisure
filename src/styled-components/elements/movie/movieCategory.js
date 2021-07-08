import styled from "styled-components";

export const Movie = styled.div`
  h1 {
    margin: 0.625rem 0;
    font-size: 2.063rem;
    color: ${props => props.theme.color.main};
    font-weight: bold;
    letter-spacing: 0.063rem;
  }
`
export const MovieCategory = styled.section`

`
export const MovieCategoryTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  margin: 1.563rem 0 0.625rem;
  transition: 0.1s;
  i {
  margin-left: 0.875rem;
  }
  &:hover{
    cursor: pointer;
    transition: 0.2s;
    font-size: 1.063rem;
    color: ${props => props.theme.color.main}
  }
`
export const MovieCategoryList = styled.ul`
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar{
    height: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background: ${props => props.theme.color.main};
    border-radius: 6px;
  }
`
export const MovieCategoryItem = styled.div`
  width: 128px;
  margin-right: 23px;
  flex-shrink: 0;
`
export const MovieCategoryForm = styled.form`
    width: 100%;
  
`

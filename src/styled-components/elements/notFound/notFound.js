import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  i {
    font-size: 203px;
    color: ${props => props.theme.color.main};
  }
`
export const NotFoundTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 44px;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.color.main};
`

export const NotFoundRedirect = styled.span`
  margin-bottom: 34px;
`
import styled from "styled-components";

export const Container = styled.section`
  width: 320px;
  margin: 0 auto;
`
export const TriangleBot = styled.div`
  z-index: -10;
  position: absolute;
  bottom: 0;
  left: 0;
  border-left: 100vw solid ${props => props.theme.color.red};
  border-top: 100px solid transparent;
`
export const TriangleTop = styled.div`
  z-index: -10;
  position: absolute;
  top: 0;
  right: 0;
  border-right: 100vw solid ${props => props.theme.color.red};
  border-bottom: 100px solid transparent;
`


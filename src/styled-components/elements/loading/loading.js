import styled from "styled-components";
import {an__loadingCircle} from "../../general/animations";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const LoadingTitle = styled.h1`
  font-size: 44px;
  margin-bottom: 128px;
`
export const LoadingContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  border-bottom: 4px solid ${props => props.theme.color.main};
  padding-bottom: 13px;

  span {
    width: 38px;
    height: 38px;
    background: ${props => props.theme.color.main};
    border-radius: 100px;

    &:nth-child(1) {
      animation: 0.5s ${an__loadingCircle} infinite alternate;
    }

    &:nth-child(2) {
      animation: 0.5s 0.5s ${an__loadingCircle} infinite alternate;
    }

    &:nth-child(3) {
      animation: 0.6s 0.3s ${an__loadingCircle} infinite alternate;
    }

    &:nth-child(4) {
      animation: 0.5s ${an__loadingCircle} infinite alternate;
    }

    &:nth-child(5) {
      animation: 0.5s 0.5s ${an__loadingCircle} infinite alternate;
    }
  }
`
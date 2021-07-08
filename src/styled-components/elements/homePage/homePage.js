import styled from "styled-components";
import {an__navigationItem} from "../../general/animations";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 20px;
`
export const NavigationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 226px;
  margin: 5px;
  background: ${props => props.theme.color.main};
  border-radius: 33px;
  color: ${props => props.theme.color.black};
  font-weight: bold;
  animation: ${ props => props.animation ? an__navigationItem : "" } 0.6s forwards;

  i {
    font-size: 4rem;
    margin-bottom: 3px;
  }

  span {
    font-size: 2.063rem;
  }
`
export const LogOut = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-weight: bold;

  i {
    font-size: 1.570rem;
    color: ${props => props.theme.color.main};
  }

  span {
    margin-left: 0.313rem;
    color: ${props => props.theme.color.gray}
  }
`
export const UserStatistics = styled.section`
  margin-top: 65px;

  h2 {
    color: ${props => props.theme.color.gray}
  }
`
export const UserStatisticsItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  font-weight: bold;

  i {
    font-size: 1.375rem;
    color: ${props => props.theme.color.main};
  }

  span {
    margin-left: 0.313rem;
    color: ${props => props.theme.color.gray}
  }
`



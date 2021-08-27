import styled from "styled-components";
import {an__navigationItem} from "../../general/animations";
import {device} from "../../general/breakpoints";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NavigationItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 180px;
  margin: 5px;
  border-radius: 33px;
  overflow: hidden;
  animation: ${props => props.animation ? an__navigationItem : ""} 0.6s forwards;

  a {
    display: block;
    width: 100%;
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 207px;
  }

  @media ${device.mobileL} {
    height: 237px;
  }

  @media ${device.tablet} {
    height: 297px;
  }

  @media ${device.laptop} {
    width: 33%;
    height: 315px;
    flex-shrink: 1;
  }
  @media ${device.laptopL} {
    background: red;
    height: 365px;
    flex-shrink: 1;
  }
`
export const NavigationItemTitle = styled.h2`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  padding-top: 1.188rem;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 58, 64, 0.2));
  font-size: 2.063rem;
  font-weight: bold;
  text-align: center;


  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 211px;
  }

  @media ${device.mobileL} {
    height: 241px;
  }

  @media ${device.tablet} {
    height: 372px;
    font-size: 2.64rem;
    padding-top: 78px;
  }
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 317px;
    width: 502px;
    padding: 0;
    transition: 0.2s;
    &:hover {
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(52, 58, 64, 0.4));
    }

    &:hover ~ img {
      transition: 0.5s;
      transform: scale(110%);
    }
  }
  @media ${device.laptopL} {
    width: 710px;
    height: 370px;
  }
`
export const NavigationItemTitleGames = styled(NavigationItemTitle)`
  height: 216px;
  padding-top: 32px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 230px;
  }

  @media ${device.mobileL} {
    height: 261px;
  }

  @media ${device.tablet} {
    height: 403px;
    padding-top: 119px;
  }
  @media ${device.laptop} {
    width: 502px;
    height: 317px;
    padding: 0;
    //margin-top: 20px;
  }
  @media ${device.laptopL} {
    width: 710px;
    height: 370px;
  }
`
export const NavigationItemTitleOverwatch = styled(NavigationItemTitle)`

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    height: 316px;
    width: 1014px;
    padding: 0;
  }
  @media ${device.laptopL} {
    width: 1430px;
    height: 370px;
  }

`
export const NavigationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ///////////
  // media //
  ///////////
  @media ${device.laptop} {
    height: 315px;
    object-position: top;
  }
  @media ${device.laptopL} {
    height: 370px;
  }

`

export const ColorForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;

  ///////////
  // media //
  //////////
  @media ${device.tablet} {
    margin-top: 23px;
  }
`

export const ColorFormCheckbox = styled.div`
  position: relative;
  width: 73px;
  height: 73px;


  input {
    appearance: none;
    background: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 3;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  input:checked ~ label i {
    font-size: 56px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    border-radius: ${props => props.theme.border_radius.l};
    font-size: 0;
  }


  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 83px;
    width: 83px;
    input:checked ~ label i {
      font-size: 66px;
    }
  }

  @media ${device.tablet} {
    height: 142px;
    width: 142px;
    input:checked ~ label i {
      font-size: 128px;
    }
  }

  @media ${device.laptop} {
    height: 85px;
    width: 245px;

    input:checked ~ label i {
      font-size: 80px;
    }
  }
  @media ${device.laptopL} {
    height: 94px;
    width: 288px;
    input:checked ~ label i {
      font-size: 80px;
    }
  }
`



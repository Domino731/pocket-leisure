import styled from "styled-components";
import { an__navigationItem } from "../../general/animations";
import { device } from "../../general/breakpoints";

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
  height: 162px;
  margin: 5px;
  border-radius: 17px;
  overflow: hidden;
  animation: ${props => props.animation ? an__navigationItem : ""} 0.6s forwards;

  a {
    display: block;
    width: 100%;
    position: relative;
    &::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 58, 64, 0.2));
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 207px;
  }

  @media ${device.mobileL} {
    margin: 7px;
    height: 237px;
  }

  @media ${device.tablet} {
    height: 272px;
    margin: 11px;
  }

  @media ${device.laptop} {
    width: 33%;
    height: 286px;
    flex-shrink: 1;
  }
  @media ${device.laptopL} {
    height: 350px;
  }
`
export const NavigationItemTitle = styled.strong`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  font-size: 31px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    font-size: 38px;
  }

  @media ${device.mobileL} {
    font-size: 45px;
  }

  @media ${device.mobileXL} {
    font-size: 47px;
  }
  @media ${device.tablet} {
    font-size: 54px;
  }
  @media ${device.laptop} {
    font-size: 56px;
    transition: 0.2s;
    &:hover ~ img {
      transform: scale(110%);
    }
  }
  @media ${device.desktopS} {
   font-size: 69px;
  }
`

export const NavigationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
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

export const ColorForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 7px;

  ///////////
  // media //
  //////////
  @media ${device.tablet} {
    margin-top: 17px;
    justify-content: space-evenly;
  }
  @media ${device.laptop} {
    margin-top: 6px;
  }
  @media ${device.laptopM} {
    margin-top: 12px;
  }
`

export const ColorFormCheckbox = styled.div`
  position: relative;
  width: 20%;
  height: 39px;
  background: ${props => props.backgroundColor};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 0;
  }
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
    &:checked ~ i {
    font-size: 29px;
  }
  }
 
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 44px;
    border-radius: 8px;
    input:checked ~  i {
      font-size: 32px;
    }
  }
  @media ${device.mobileL} {
    height: 46px;
    input:checked ~ i {
      font-size: 35px;
    }
  }
  @media ${device.tablet} {
    height: 56px;
    border-radius: 11px;
    input:checked ~  i {
      font-size: 41px;
    }
  }

  @media ${device.laptop} {
    height: 47px;
    border-radius: 10px;
    input:checked ~ i {
      font-size: 38px;
    }
  }
  @media ${device.laptopM} {
    height: 62px;
    input:checked ~ i {
      font-size: 48px;
    }
  }
  @media ${device.laptopL} {
    height: 66px;
    border-radius: 13px;
    input:checked ~ i {
      font-size: 51px;
    }
  }
`



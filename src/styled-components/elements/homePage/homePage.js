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

export const ColorForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 13px;

  ///////////
  // media //
  //////////
  @media ${device.tablet} {
    margin-top: 17px;
    justify-content: space-evenly;
  }
  @media ${device.laptop} {
    margin-top: 14px;
  }
  @media ${device.laptopM} {
    margin-top: 16px;
  }
`

export const ColorFormCheckbox = styled.div`
  position: relative;
  width: 20%;
  height: 52px;
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
    &:checked ~ label i {
    font-size: 39px;
  }
  }
 
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    border-radius: 10px;
    font-size: 0;
    @media ${device.mobileM} {
      border-radius: 13px;
    }
    @media ${device.mobileL} {
      border-radius: 15px;
    }
    @media ${device.tablet} {
      border-radius: 17px;
    }
    @media ${device.laptop} {
      border-radius: 14px;
    }
    @media ${device.laptopL} {
      border-radius: 17px;
    }
  }


  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 64px;
    input:checked ~ label i {
      font-size: 52px;
    }
  }
  @media ${device.mobileM} {
    height: 68px;
    input:checked ~ label i {
      font-size: 56px;
    }
  }
  @media ${device.tablet} {
    height: 78px;
    input:checked ~ label i {
      font-size: 71px;
    }
  }

  @media ${device.laptop} {
    height: 59px;
    input:checked ~ label i {
      font-size: 53px;
    }
  }
  @media ${device.laptopM} {
    height: 62px;
    input:checked ~ label i {
      font-size: 54px;
    }
  }
  @media ${device.laptopL} {
    height: 74px;
    input:checked ~ label i {
      font-size: 68px;
    }
  }
`



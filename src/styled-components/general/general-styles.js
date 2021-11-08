import styled from "styled-components";
import { an__checkboxRadio } from "./animations";
import { device } from "./breakpoints";

export const Container = styled.main`
  width: 310px;
  margin: 0 auto;
  padding-bottom: 17px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    width: 370px;
  }

  @media ${device.mobileL} {
    width: 410px;
  }
  @media ${device.mobileXL}{
    width: 590px;
  }
  @media ${device.tablet} {
    width: 750px;
  }
  @media ${device.laptop} {
    width: 1000px;
  }
  @media ${device.laptopM} {
    width: 1250px;
  }
  @media ${device.laptopL} {
    width: 1420px;
  }
  @media ${device.desktopS} {
    width: 1590px;
  }
`
export const PosterBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 190px;
  border-radius: ${props => props.theme.border_radius.l};
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.mobileM} {
    height: 192px;
  }
  @media ${device.mobileL} {
    height: 220px;
  }
  @media ${device.tablet} {
    height: 360px;
  }
  @media ${device.laptop} {
    height: 382px;
  }
  @media ${device.laptopL} {
    height: 457px;
  }
`
export const PosterBigMissing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: ${props => props.theme.border_radius.l};
  font-size: 4.5rem;

`
export const PosterMed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  border-radius: ${props => props.theme.border_radius.l};
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.main};
  margin-right: 0.625rem;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  i {
    font-size: 30px;
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 125px;
    height: 188px;
    i {
      font-size: 54px;
    }

  }

  @media ${device.tablet} {
    width: 240px;
    height: 360px;
    i {
      font-size: 82px;
    }

  }
  @media ${device.laptopL} {
    width: 258px;
  }



`
export const PosterMedMissing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100px;
  flex-shrink: 0;
  margin-right: 0.625rem;
  border-radius: ${props => props.theme.border_radius.l};
  color: ${props => props.theme.color.main};
  background: ${props => props.theme.color.black};
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 125px;
    font-size: 44px;
  }

  @media ${device.mobileL} {
    width: 210px;
    height: 315px;
    font-size: 54px;
  }


`
export const TitleBar = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: 36px;
    width: 36px;
    background: ${props => props.theme.color.main};
    box-shadow: 0 0 14px ${props => props.theme.color.main};
    border-radius: 50%;
    overflow: hidden;
    transition: 0.4s;

    &:hover {
      transition: 0.4s;
      width: 126px;
    }

    @media ${device.mobileM} {
      height: 41px;
      width: 41px;
    }
    @media ${device.mobileL} {
      height: 48px;
      width: 48px;
    }
  }

  i {
    margin-left: 7px;
    font-size: 20px;
    z-index: 1;
    @media ${device.mobileM} {
      margin-left: 9px;
      font-size: 24px;
    }
    @media ${device.mobileL} {
      margin-left: 11px;
      font-size: 27px;
    }
  }

  span {
    margin-left: 12px;
  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    a {
      height: 65px;
      width: 65px;

      &:hover {
        width: 168px;
      }
    }

    i {
      font-size: 44px;
      margin-left: 11px;
    }

    span {
      font-size: 30px;
    }
  }
`

export const ItemTitleSmall = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 0.813rem;
`
export const ItemTitleMedium = styled.h3`
  font-weight: bold;
  margin: 0.313rem 0 0.625rem;
  letter-spacing: 0.063rem;
  font-size: 1rem;
`
export const FactsTable = styled.table`
  border-spacing: 0;

  tr {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    i {
      color: ${props => props.theme.color.main};
      margin-right: 4px;
    }

    span {
      display: inline-block;
      word-wrap: break-word;
    }

    td:first-child {
      vertical-align: top;
      white-space: nowrap;
      padding: 0 20px 13px 0;
      color: ${props => props.theme.color.gray};
    }


    span {
      margin-right: 0.375rem;

      &::after {
        content: ",";
      }

      &:last-child {
        &::after {
          content: "";
        }

        margin-bottom: 10px;
      }
    }
  }
`
export const ItemPremiereSmall = styled.span`
  display: block;
  font-size: 0.875rem;
  color: ${props => props.theme.color.gray};
`
export const ItemPremiereMedium = styled.span`
  display: block;
  font-size: 1.063rem;
  color: ${props => props.theme.color.gray};
`
export const CheckboxRadio = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 0.563rem 3.125rem;
    letter-spacing: 0.063rem;
    width: 100%;
    margin-bottom: 0.5rem;
    border: none;

    &:hover {
      cursor: pointer;
    }

    ///////////
    // media //
    ///////////
    @media ${device.tablet} {
      height: 57px;
    }

    i {
      position: absolute;
      left: 0;
      margin-left: 0.75rem;
    }
  }

  span {

    &::before {
      content: "";
      height: 100%;
      width: 40px;
      background: ${props => props.theme.color.main};
      position: absolute;
      z-index: -3;
      top: 0;
      left: 0;
      border-radius: 0 50px 50px 0;

      ///////////
      // media //
      ///////////
      @media ${device.tablet} {
        width: 55px
      }
    }
  }

  input:checked ~ span::before {
    animation: ${an__checkboxRadio} 0.5s forwards;
  }

  input {
    appearance: none;
    background: transparent;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 3;
    border: none;

  }
`
export const TitlePrimary = styled.h1`
  margin: 0.625rem 0;
  font-size: 2.063rem;
  color: ${props => props.theme.color.main};;
  font-weight: bold;
  letter-spacing: 0.063rem;
  display: flex;
  flex-direction: column;

  span {
    font-size: 15px;
    color: ${props => props.theme.color.white}
  }
`
export const Genre = styled.li`
  grid-area: ${props => props.area};
  margin: 4px 3px;
  border-radius: 6px;
  background: ${props => props.theme.color.main};
  font-weight: bold;
  letter-spacing: 0.081rem;
  overflow: hidden;
  box-shadow: 0 0 8px ${props => props.theme.color.main};
    font-size: 13px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ///////////
  // media //
  ///////////

  @media ${device.mobileM} {
    font-size: 15px;
    margin: 4px 3px;
    border-radius: 9px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
    margin: 5px 4px;
    border-radius: 11px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
    border-radius: 12px;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
    margin: 9px;
    transition: 0.3s;
    &:hover {
      letter-spacing: 0.25rem;
    }
  }
`;

export const GetMoreBtn = styled.button`
  width: 100%;
  height: 48px;
  margin: 30px 0;
  border: none;
  color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.border_radius.l};
  background: ${props => props.theme.color.main};

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    height: 70px;
  }
`;

export const FullWidePoster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: -3;
  position: relative;
  filter: drop-shadow(5px 5px 5px #fff inset);
`;

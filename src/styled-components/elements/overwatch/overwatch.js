import styled from "styled-components";
import { device } from "../../general/breakpoints";
import { FormElement } from "../user-form/user-form";

export const OwSearchContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form > button {
    margin-bottom: 12px;
  }

  @media (max-height: 480px) {
    justify-content: flex-start;
    padding-top: 20px;
    height: auto;
  }
`

export const OwPoweredBy = styled.div`
  font-size: 16px;
  margin-top: -12px;
  margin-bottom: 12px;
`
export const OwFormElement = styled(FormElement)`
  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    input {
      width: 400px;
    }
  }
`

export const OwSearchSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  i {
    font-size: 2.5rem;
    margin-top: 2px;
    background: none;
    width: auto;
    height: auto;
    box-shadow: none;
  }

  img {
    width: 48px;
    height: auto;
    object-fit: cover;
    transition: 0.2s;
    border-radius: ${props => props.theme.border_radius.s};

    &:hover {
      cursor: pointer;
    }
    ///////////
    // media //
    ///////////
    @media ${device.mobileL} {
      width: 50px;
    }
    @media ${device.tablet} {
      width: 63px;
    }
    @media ${device.laptop} {
      width: 45px;
    }
    @media ${device.laptopM} {
      width: 48px;
    }
    @media ${device.laptopL} {
      width: 51px;
    }
  }
`
export const OwPlayerBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 208px;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    height: 233px;
  }
  @media ${device.laptop} {
    height: 190px;
  }
  @media ${device.laptopL} {
    height: 241px;
  }
`
export const OwIcon = styled.img`
  width: 68px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 72px;
  z-index: -1;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 71px;
    top: 75px;
  }
  @media ${device.laptop} {
    width: 57px;
    top: 60px;
  }
  @media ${device.laptopL} {
    width: 77px;
    top: 87px;
  }
`
export const OwLevelIcon = styled.img`
  width: 214px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    width: 222px;
  }
  @media ${device.laptop} {
    width: 177px;
  }
  @media ${device.laptopL} {
    width: 248px;
  }
`
export const OwPrestigeIcon = styled(OwLevelIcon)`
  position: absolute;
  top: 114px;
    width: 187px;
  height: auto;
  object-fit: cover;
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    top: 117px;
    width: 197px;
  }
  @media ${device.laptop} {
    top: 92px;
    width: 155px;
  }
  @media ${device.laptopL} {
    top: 143px;
    width: 194px;
  }
  

`
export const OwName = styled.h1`
  border-bottom: 3px solid ${props => props.theme.color.main};
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  padding-bottom: 3px;
  margin-top: 0.438rem;
  letter-spacing: 0.063rem;

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    font-size: 19px;
  }
  @media ${device.tablet} {
    font-size: 26px;
  }
  @media ${device.laptop} {
    font-size: 21px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
    border-bottom: 4px solid ${props => props.theme.color.main};
  }
`
export const OwPrivate = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: ${props => props.theme.color.main};
    box-shadow: 0 0 10px ${props => props.theme.color.main};
    border-radius: 100px;
    font-size: 6.688rem;
  }

  strong {
    margin-top: 18px;
  }
`
export const OwStatsGeneral = styled.div`

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const OwStatsSingle = styled.section`

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    padding: 10px;
    width: 100%;
  }
`
export const OwStatsSingleOverall = styled.section`

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    width: 100%
  }
`

export const OwStatsColumns = styled.div`

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    display: flex;
  }
`
export const OwStatsSingleColumn = styled.div`

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const OwStatsTable = styled.table`
width: 100%;
border-collapse: collapse;
table-layout:fixed;
font-size: 10px;
letter-spacing: 0.063rem;
table, td, th {
  border: 1px solid white;
}

  tr {
    font-size: 13px;
    font-weight: 600;
    height: 20px;
    border-color: inherit;
    td {
      width:50%; 
      vertical-align: middle;
      padding: 0 7px;
    }

    td:first-child {
      white-space: nowrap;
    }

    td:last-child {
   text-align: right;
    }
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    tr{
       font-size: 16px;
    height: 31px;
    }
  }
  @media ${device.mobileL} {
    tr {
      font-size: 17px;
    height: 32px;
    }
  }
  @media ${device.tablet} {
    tr td {
      padding: 0 12px;
    }
    table, td, th {
  border: 2px solid white;
}
  }
  @media ${device.laptop} {
    tr {
    font-size: 15px;
    height: 29px;
    td {
      padding: 0 8px;
    }
    }

    table, td, th {
  border: 1px solid white;
}
  }
  @media ${device.laptopL} {
    tr {
    font-size: 17px;
    height: 33px;
    td {
      padding: 0 11px;
    }
    }
    table, td, th {
  border: 2px solid white;
}
  }
`
export const OwStatsTitle = styled.h2`
  background: #343a40;
  padding: 2px;
  margin: 7px auto 2px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    padding: 4px;
    margin: 7px auto 11px;
    font-size: 22px;
    border-radius: 10px;
  }
  @media ${device.mobileL} {
    padding: 5px;
    margin: 13px auto 11px;
    font-size: 24px;
    border-radius: 14px;
  }
  @media ${device.tablet} {
    padding: 4px;
    margin: 17px auto 7px;
    font-size: 24px;
    border-radius: 12px;
  }
  @media ${device.laptop} {
    margin: 12px auto 7px;
    font-size: 26px;
    border-radius: 13px;
  }
  @media ${device.laptopL} {
    padding: 5px;
    margin: 15px auto 12px;
    font-size: 32px;
    border-radius: 18px;
  }
`
export const OwStatTitle = styled.h3`
  margin-top: 27px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  background-color: ${props => props.theme.color.main};
  border-radius: 12px 12px 0 0;
  padding: 3px 0;
  font-size: 14px;
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    padding: 4px;
    font-size: 18px;
    border-radius: 14px 14px 0 0;
  }
  @media ${device.mobileL}{
    margin-top: 27px;
    font-size: 19px;
    border-radius: 12px 12px 0 0
  }
  @media ${device.tablet} {
    margin-top: 30px;
    font-size: 17px;
    border-radius: 14px 14px 0 0;
    text-align: left;
    padding-left: 12px;
  }
  @media ${device.laptop} {
    margin-top: 31px;
    font-size: 17px;
    border-radius: 13px 13px 0 0;
    text-align: left;
    padding-left: 8px;
  }
  @media ${device.laptopL} {
    margin-top: 35px;
    font-size: 21px;
    border-radius: 18px 18px 0 0;
    text-align: left;
    padding-left: 11px;
  }
`

export const OwWonGamesBar = styled.div`
  margin-top: 4px;
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 50px;
  background: ${props => props.theme.color.white};
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    margin-left: -1px;
    height: 100%;
    width: ${props => {
    const number = ((props.won / props.played) * 100)
    return number > 0 ? `${number}%` : `0%`
  }};
    transform: skew(17deg, 0deg);
    background: ${props => props.theme.color.green};
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM}{
    margin-top: 6px;
    height: 27px;
  }
  @media ${device.mobileL} {
    height: 41px;
    margin-top: 13px;
  }
  @media ${device.laptop} {
    height: 33px;
    margin-top: 9px;
  }
  @media ${device.laptopL} {
    height: 44px;
    margin-top: 14px;
  }
`

export const OwMedalsDiagram = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.813rem 0 1.688rem;
  border-bottom: 3px solid ${props => props.theme.color.main};

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    margin: 19px 0 5px;
  }
  @media ${device.laptop} {
    margin: 14px 0 3px;
  }
  @media ${device.laptopL} {
    margin: 21px 0 4px;
  }
`
export const OwMedalBar = styled.div`
  height: 102px;
  width: 56px;
  background: ${props => props.theme.color.white};
  border-radius: 50px 50px 0 0;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${props => ((props.medal / props.allMedals) * 100) + "%"};;
    background: ${props => props.color};
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    height: 127px;
    width: 66px;
  }
  @media ${device.mobileL} {
    width: 88px;
    height: 164px;
  }
  @media ${device.tablet} {
    width: 72px;
  }
  @media ${device.laptop} {
    width: 88px;
    height: 171px;
  }
  @media ${device.laptopL} {
    height: 189px;
    width: 99px;
  }
`
export const OwLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const OwLink = styled.div`
  font-size: 20px;
  padding: 10px;
  border-radius: 6px;
  background: #495057;
  text-align: center;
  margin-bottom: 10px;
  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    font-size: 26px;
    border-radius: 9px;
  }
  @media ${device.tablet} {
    margin: 0;
    width: 49%;
  }
  @media ${device.laptop} {
    font-size: 22px;
    border-radius: 7px;
    padding: 7px;
  }
  @media ${device.laptopL} {
    font-size: 23px;
    border-radius: 8px;
    padding: 8px;
  }
`
import styled from "styled-components";
import {device} from "../../general/breakpoints";
import {FormElement} from "../user-form/user-form";

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
  @media ${device.laptopL} {
    width: 121px;
    top: 135px;
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
  @media ${device.laptopL} {
    width: 354px;
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
  @media ${device.laptopL} {
    top: 182px;
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
  @media ${device.laptopL} {
    margin-top: 67px;
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
    width: 45%;
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
    width: 50%;
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
  @media ${device.tablet} {

  }
  @media ${device.laptopL} {

  }
`
export const OwStatsTitle = styled.h2`
  background: ${props => props.theme.color.main};
  padding: 2px;
  margin: 7px auto 2px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  ///////////
  // media //
  ///////////
 
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
  @media ${device.tablet} {
    width: 211px;
    text-align: left;
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
  @media ${device.mobileL} {
    height: 52px;
  }
  @media ${device.tablet} {
    width: 322px;
  }
  @media ${device.laptopL} {
    width: 434px;
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
  @media ${device.tablet} {
    width: 322px;
  }
  @media ${device.laptopL} {
    width: 434px;
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
  @media ${device.mobileL} {
    width: 85px;
  }
  @media ${device.tablet} {
    width: 72px;
  }
  @media ${device.laptopL} {
    height: 155px;
    width: 90px;
  }
`
export const OwLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const OwLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 286px;
  height: 93px;
  margin: 12px auto;
  border: none;
  border-radius: 18px;
  background: ${props => props.theme.color.main};;
  box-shadow: 0 0 14px ${props => props.theme.color.main};;
  color: ${props => props.theme.color.white};;
  font-weight: bold;
  font-size: 2.125rem;
  text-align: center;

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    margin: 0;
    width: 360px;
    font-size: 40px;
  }
  @media ${device.laptopL} {
    width: 512px;
  }
`
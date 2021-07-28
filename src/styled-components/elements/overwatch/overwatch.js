import styled from "styled-components";
import {device} from "../../general/breakpoints";

export const OwRegions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
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
    width: 63px;
    min-height: 42px;
    height: auto;
    object-fit: cover;
    transition: 0.2s;
    border-radius: ${props => props.theme.border_radius.s};

    ///////////
    // media //
    ///////////
    @media ${device.tablet} {
      width: 94px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
export const OwPlayerBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 318px;
`
export const OwIcon = styled.img`
  width: 97px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 119px;
  z-index: -1;
`
export const OwLevelIcon = styled.img`
  width: 293px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 20px;
`
export const OwPrestigeIcon = styled(OwLevelIcon)`
  position: absolute;
  top: 156px;
`
export const OwName = styled.h1`
  margin-top: 0.438rem;
  padding-bottom: 0.25rem;
  border-bottom: 3px solid ${props => props.theme.color.main};
  text-align: center;
  font-weight: bold;
  font-size: 1.938rem;
  letter-spacing: 0.063rem;
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

export const OwStatsTable = styled.table`
  tr {
    display: flex;
    vertical-align: middle;
    border-color: inherit;

    td {
      display: flex;
      align-items: center;
      margin-top: 7px;
    }

    td:first-child {
      display: block;
      min-width: 150px;
      vertical-align: top;
      white-space: nowrap;
      padding: 11px 22px 11px 10px;
      background: ${props => props.theme.color.main};
      border-radius: 0 20px 20px 0;
    }

    td:nth-child(2) {
      min-width: 155px;
      padding: 11px 22px 11px 40px;
      border-radius: 20px;
      margin-left: -32px;
      z-index: -1;
      background: ${props => props.theme.color.white};
      color: ${props => props.theme.color.black}
    }
  }
`
export const OwStatsTitle = styled.h2`
  width: 87%;
  height: 65px;
  margin: 27px auto;
  background: ${props => props.theme.color.main};
  transform: skew(17deg, 0deg);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    transform: skew(-17deg);
    font-weight: bold;
    font-size: 2.75rem;

  }

  ///////////
  // media //
  ///////////
  @media ${device.tablet} {
    span {
      font-size: 47px;
    }
  }
`
export const OwStatTitle = styled.h3`
  margin-top: 27px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.063rem;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.color.main};
`

export const OwWonGamesBar = styled.div`
  margin-top: 0.813rem;
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 50px;
  background: ${props => props.theme.color.white};
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    margin-left: -1px;
    height: 100%;
    width: ${props => ((props.won / props.played) * 100) + "%"};
    transform: skew(17deg, 0deg);
    background: ${props => props.theme.color.green};
  }

  ///////////
  // media //
  ///////////
  @media ${device.mobileL} {
    height: 52px;
  }
`

export const OwMedalsDiagram = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.813rem 0 1.688rem;
  border-bottom: 4px solid ${props => props.theme.color.main};


`
export const OwMedalBar = styled.div`
  height: 126px;
  width: 56px;
  background: ${props => props.theme.color.white};
  border-radius: 50px 50px 0 0;
  position: relative;

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
`
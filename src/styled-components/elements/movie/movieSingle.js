import styled from "styled-components";
import { device } from "../../general/breakpoints";
export const MovieSingleContainer = styled.li`
width: 50%;
padding: 7px;
font-size: 10px;
a{
    position: relative;
}
  ///////////
  // media //
  ///////////
  @media ${device.mobileM}{
      font-size: 11px;
  }
  @media ${device.mobileL}{
    width: 33.33%;
    font-size: 9px;
  }
  @media ${device.mobileXL} {
      font-size: 10px;
  }
  @media ${device.tablet} {
      width: 25%;
      font-size: 10px;
  }
  @media screen and (min-width: 850px){
      font-size: 11px;
  }
  @media screen and (min-width: 924px){
      font-size: 12px;
  }
  @media ${device.laptop}{
      font-size: 10px;
      width: 20%;
  }
  @media screen and (min-width: 1144px){
      font-size: 11px;
  }
  @media ${device.laptopM}{
      width: 16.66%;
      font-size: 12px;
  }
  @media ${device.laptopL}{
      border-radius: 18px;
  }
  @media ${device.desktopS}{
      width: 14.28%;
      border-radius: 21px;
  }
`
export const MovieSinglePosterWrapper = styled.div`
box-shadow: 0 0 15px ${props => props.theme.color.missingBlack};
height: 204px;
overflow: hidden;
border-radius: 13px;
margin-bottom: 0.3em;
&:hover img {
 @media ${device.laptop} {
     transform: scale(110%);
 }
}
img {
    height: 100%;
    object-fit: cover;
    width: 100%;  
    transition: 0.3s;
}


  ///////////
  // media //
  ///////////
  @media screen and (min-width: 340px){
      height: 219px;
  }
  @media screen and (min-width: 361px){
      height: 228px;
  }
  @media ${device.mobileM}{
    height: 236px;
  }
  @media screen and (min-width: 401px){
      height: 266px;
  }
  @media ${device.mobileL}{
      height: 192px;
      margin-bottom: 6px;
  }
  @media screen and (min-width: 485px){
      height: 228px;
  }
  @media screen and (min-width: 548px){
      border-radius: 18px;
      height: 248px;
  }
  @media ${device.mobileXL} {
    height: 277px;
  }
  @media screen and (min-width: 650px){
      height: 294px;
  }
  @media screen and (min-width: 701px){
      height: 314px;
  }
  @media screen and (min-width: 737px){
      height: 323px;
  }
  @media ${device.tablet} {
    height: 268px;
  }
  @media screen and (min-width: 850px){
      height: 284px;
  }
  @media screen and (min-width: 924px){
      height: 318px;
  }
  @media screen and (min-width: 991px){
      height: 327px;
  }
  @media ${device.laptop}{
      height: 284px;
      border-radius: 14px;
  }
  @media screen and (min-width: 1144px){
      height: 300px;
  }
  @media screen and (min-width: 1200px){
      height: 310px;
  }
  @media screen and (min-width: 1246px){
      height: 320px;
  }
  @media ${device.laptopM} {
    height: 292px;
  }
  @media screen and (min-width: 1374px){
      height: 307px;
  }
  @media ${device.laptopL}{
    height: 325px;
  }
  @media screen and (min-width: 1500px){
      height: 339px;
  }
  @media screen and (min-width: 1568px){
      height: 363px;
  }
  @media ${device.desktopS}{
      height: 306px;
  }
`
export const MovieSinglePosterMissing = styled(MovieSinglePosterWrapper)`
box-shadow: 0 0 15px ${props => props.theme.color.missingYellow} inset;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 50%;
    height: auto;
    object-fit: cover;
}
`
export const MovieSingleTitle = styled.h3`
font-size: 1.3em;
letter-spacing: 0.063rem;
font-weight: bold;
`
export const MovieSingleRelase = styled.div`
 color: ${props => props.theme.color.gray};
 font-size: 1.2em;
 margin-top: 0.4em;
 @media ${device.mobileL} {
     font-size: 1.3em;
 }
`
export const MovieSingleRating = styled.div`
z-index: 2;
position: absolute;
top: 6px;
right: 6px;
font-size: 15px;
padding: 3px 4px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0.4em;
background: ${props => props.background};
box-shadow: 0 0 6px ${props => props.theme.color.missingBlack};
opacity: 0.9;
  ///////////
  // media //
  ///////////
@media ${device.mobileM}{
    top: 8px;
    right: 8px;
    font-size: 18px;
}
@media ${device.mobileL}{
    font-size: 14px
}
@media screen and (min-width: 485px){
    top: 8px;
    right: 8px;
    font-size: 15px;
  }
  @media ${device.mobileXL}{
      font-size: 18px;
      top: 10px;
    right: 10px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    top: 8px;
    right: 8px;
  }
  @media screen and (min-width: 850px){
    font-size: 18px;
  }
  @media screen and (min-width: 924px){
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
  @media ${device.laptop} {
    font-size: 15px;
    top: 6px;
    right: 6px;
  }
  @media screen and (min-width: 1144px){
      font-size: 16px;
  }
  @media ${device.laptopM} {
    font-size: 17px;
    top: 8px;
    right: 8px;
  }
  @media ${device.laptopL}{
      font-size: 19px;
  }
`
import styled from "styled-components";
import { device } from "../../general/breakpoints";
export const MovieSingleContainer = styled.li`
width: 50%;
padding: 7px;
font-size: 10px;
a{
    position: relative;
}
`
export const MovieSinglePosterWrapper = styled.div`
box-shadow: 0 0 15px ${props => props.theme.color.missingBlack};
height: 204px;
&:hover img {
 @media ${device.laptop} {
     transform: scale(110%);
 }
}
img {
    border-radius: 7px;
    width: 100%;  
    transition: 0.3s;
}
margin-bottom: 0.3em;
`
export const MovieSinglePosterMissing = styled(MovieSinglePosterWrapper)`
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
`
export const MovieSingleRating = styled.div`
position: absolute;
top: 3px;
right: 3px;
font-size: 15px;
padding: 3px 4px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0.4em;
background: ${props => props.background};
box-shadow: 0 0 6px ${props => props.theme.color.missingBlack};
`
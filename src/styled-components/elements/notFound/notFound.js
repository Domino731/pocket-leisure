import styled from "styled-components";
import { device } from "../../general/breakpoints";

export const ErrorContainer = styled.div`
 font-size: 18px;
  img {
    display: block;
    margin: 16px auto 14px;
    width: 260px;
    height: auto;
    object-fit: cover;
  }
  h1 {
    text-align: center;
    font-size: 1em;
  }
  ///////////
  // media //
  ///////////
  @media ${device.mobileM} {
    font-size: 22px;
    img {
      width: 320px;
    }
  }
  @media ${device.tablet} {
    font-size: 26px;
    img {
      width: 340px;
    }
  }
  @media ${device.laptop} {
    font-size: 28px;
    img {
      width: 370px;
    }
  }
`


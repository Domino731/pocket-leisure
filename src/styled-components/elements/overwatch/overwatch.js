import styled from "styled-components";

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
  i{
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

    &:hover {
      cursor: pointer;
    }
  }
`
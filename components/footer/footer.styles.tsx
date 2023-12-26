import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  left: -48vw;
  transform: rotate(-90deg);
  width: 100vw;
  text-align: center;
  color: #cccccc;

  a {
    font-weight: bold;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

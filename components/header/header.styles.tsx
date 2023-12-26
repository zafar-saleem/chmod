import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
    text-align: left;
    margin-bottom: 5rem;
  }
`;

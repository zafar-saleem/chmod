import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 90px;
`;

export const Labels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  gap: 1rem;
`;

export const Label = styled.label`
  height: 0px;
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Field = styled.input`
  padding: 1rem;
  width: 4rem;
  text-align: center;
  font-size: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

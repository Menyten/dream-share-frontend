import styled from "styled-components";

export const Item = styled.article`
  background: ${({ theme }) => theme.secondary};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ItemTitle = styled.h2`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

export const ItemText = styled.p`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.text};
`;

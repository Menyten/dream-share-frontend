import styled from "styled-components";

export const Item = styled.article`
  background: ${({ theme }) => theme.secondary};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ItemTitle = styled.h2`
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  word-break: break-all;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

export const EndMessage = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  text-align: center;
`;

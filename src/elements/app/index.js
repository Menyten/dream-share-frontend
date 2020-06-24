import styled from "styled-components";

export const Background = styled.section`
  height: 100vh;
  width: 100%100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

export const Container = styled.section`
  width: 1200px;
  height: 80vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0.5rem 0.5rem rgba(12, 16, 31, 0.4);
  border-radius: 0.25rem;
  display: flex;
`;

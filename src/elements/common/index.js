import styled from "styled-components";

export const Content = styled.section`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
  }
`;

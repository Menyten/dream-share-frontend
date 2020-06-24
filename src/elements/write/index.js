import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  font-family: "Open Sans", sans-serif;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  height: 3rem;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.secondary};
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 0 0.5rem;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  align-self: flex-end;
  color: ${({ theme }) => theme.third};
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  border: 2px solid ${({ theme }) => theme.third};
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 0.5rem rgba(12, 16, 31, 0.4);
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

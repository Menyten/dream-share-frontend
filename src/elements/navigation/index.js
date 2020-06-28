import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  min-width: 15rem;
  flex: 0.25;
  padding: 1rem;
  background: ${({ theme }) => theme.secondary};
  z-index: 10;

  @media (max-width: 650px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 0.25rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export const NavList = styled.ul`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 0.5rem;

  @media (max-width: 650px) {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.third};
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.5rem;

  &.active {
    border-left: 3px solid ${({ theme }) => theme.third};
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 650px) {
    padding: 0.5rem;
    background: transparent;
    border-radius: 0;

    &.active {
      border-left: 0;
      border-bottom: 2px solid ${({ theme }) => theme.third};
    }
  }
`;

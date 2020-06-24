import React from "react";
import { Nav, NavList, NavItem, NavLink } from "../../elements/navigation";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/write" exact>
            Write
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;

import React from 'react';

import SideNav, {
  // Toggle,
  NavItem, NavIcon, NavText,
} from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

function MySideNav() {
  const navigate = useNavigate();

  return (
    <SideNav
      className="side-nav"
      onSelect={(selected) => {
        navigate(`/${selected}`);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="">
        <NavItem eventKey="">
          <NavIcon><i className="fa-solid fa-house-chimney" /></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="z/z-from-p">
          <NavIcon><i className="fa-solid fa-z" /></NavIcon>
          <NavText>z-table</NavText>
          <NavItem eventKey="z/z-from-p">
            <NavText>z value from prob</NavText>
          </NavItem>
          <NavItem eventKey="z/p-from-z">
            <NavText>p-value from z</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="t">
          <NavIcon><i className="fa-solid fa-t" /></NavIcon>
          <NavText>t-table</NavText>
          <NavItem eventKey="t/t-from-p">
            <NavText>t value from prob</NavText>
          </NavItem>
          <NavItem eventKey="t/p-from-t">
            <NavText>p-value from t</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="chi-sq">
          <NavIcon><i className="fa-solid fa-table-cells" /></NavIcon>
          <NavText>
            &chi;
            <sup>2</sup>
            -table
          </NavText>
          <NavItem eventKey="chi-sq/chi-sq-from-p">
            <NavText>
              &chi;
              <sup>2</sup>
              {' '}
              value from prob
            </NavText>
          </NavItem>
          <NavItem eventKey="chi-sq/p-from-chi-sq">
            <NavText>
              p-value from &chi;
              <sup>2</sup>
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>

  );
}

export default MySideNav;

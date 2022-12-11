import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import AdminLogin from '../login/AdminLogin'
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/events' activeStyle>
            course
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Galary
          </NavLink>
          <NavLink to='/team' activeStyle>
            Events
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Forms
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            About
          </NavLink>
   
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='./AdminLogin'>Sign In</NavBtnLink>
          <NavBtnLink to='./'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;
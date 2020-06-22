import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

NavBar.propTypes = {};

function NavBar() {
  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarBrand href='/'>ExerciseTracker</NavbarBrand>
      <Nav className='mr-auto' className='text-white' navbar>
        <NavItem>
          <NavLink tag={RRNavLink} to='/'>
            Exercises
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to='/create'>
            Create Exercise Log
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to='/user'>
            Create User
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

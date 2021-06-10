import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CustomerContext } from '../../contexts/CustomerContext';
import { Nav, NavLink, NavIcon, Bars, NavCart, Cart } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const { isThereCustomer } = useContext(CustomerContext);
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <Nav isThereCustomer={isThereCustomer}>
        <NavLink to='/'>Llámanos</NavLink>

        <Link to='/cart'>
          <NavCart>
            <Cart />
            <p>{itemCount}</p>
          </NavCart>
        </Link>

        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

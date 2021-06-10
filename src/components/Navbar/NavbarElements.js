import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice, FaCartPlus } from 'react-icons/fa';

export const Nav = styled.nav`
  position: fixed;
  background: rgba(0, 0, 0, .6);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  top: ${props => props.isThereCustomer ? '27px': '0'};
  z-index: 2;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
  }
`;

export const NavCart = styled.div`
display: block;
position: absolute;
top: 25px;
right: 200px;
cursor: pointer;
color: #fff;

p {
  transform: translate(100%, -175%);
  font-weight: bold;
}
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Cart = styled(FaCartPlus)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
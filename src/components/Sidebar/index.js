import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Inicio</SidebarLink>
        <SidebarLink to='/pizzas'>Pizzas</SidebarLink>
        <SidebarLink to='/desserts'>Postres</SidebarLink>
      </SidebarMenu>
      {/* <SideBtnWrap>
        <SidebarRoute to='/'>Pide Ahora</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;

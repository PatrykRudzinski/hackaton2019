import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Icon} from 'antd';
import {withRouter} from 'react-router';
import styled from 'styled-components';

const {Item} = Menu;

const StyledItem = styled(Item)`
  border: 2px solid #7A7D80;
`;



const Navigation = ({horizontal}) => {

  return (
      <Menu mode={horizontal ? 'horizontal' : 'inline'}>
          <StyledItem key="1">
            <NavLink to='/'>
              <Icon type="home" />
              <span>Powiadomienia</span>
            </NavLink>
          </StyledItem>
          <StyledItem key="2">
            <NavLink to='/'>
              <Icon type="setting" />
              <span>Ustawienia</span>
            </NavLink>
          </StyledItem>
          <StyledItem end key="3">
            <NavLink to='/'>
              <Icon type="poweroff"/>
              <span>Wyloguj</span>
            </NavLink>
          </StyledItem>
      </Menu>
  );
};

export default withRouter(Navigation);

{/* <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
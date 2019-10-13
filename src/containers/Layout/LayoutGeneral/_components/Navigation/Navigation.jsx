import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Icon, Col} from 'antd';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

const {Item} = Menu;

const StyledItem = styled(Item)`
  border: 2px solid #7A7D80;
  height: ${props => props.horizontal ? '' : '25vh !important'}; 
  display: ${props => props.horizontal ? '' : 'flex !important'};
  align-items: ${props => props.horizontal ? '' : 'center !important'};
  justify-content: ${props => props.horizontal ? '' : 'center !important'};
  `;



const Navigation = ({horizontal}) => {

  const cookies = new Cookies();
  const [redirect, setRedirect] = useState(cookies.get('token'));

  const logOut = () => {
      cookies.remove('token', {path: '/'});
      setRedirect(false);
  };

  return (
      <Menu mode={horizontal ? 'horizontal' : 'inline'} theme={horizontal ? 'dark' : ''}>
          <StyledItem key="1" horizontal = {horizontal}>
            <NavLink to='/'>
              <Icon type="bell" />
              <span>Powiadomienia</span>
            </NavLink>
          </StyledItem>
          <StyledItem key="2" horizontal = {horizontal}>
            <NavLink to='/'>
              <Icon type="setting" />
              <span>Ustawienia</span>
            </NavLink>
          </StyledItem>
          <StyledItem end key="3" horizontal = {horizontal}>
            <NavLink onClick={logOut}>
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
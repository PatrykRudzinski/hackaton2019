import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Icon, Button} from 'antd';
import {withRouter} from 'react-router';
import styled from 'styled-components';

// const styledItem = styled(Item)`

// `

const {Item} = Menu;

const Navigation = ({horizontal}) => {

  return (
      <Menu mode={horizontal ? 'horizontal' : 'inline'}>
          <Item key="1">
            <NavLink to='/'>
              <Icon type="home" />
              <span>Potrzebuje pomocy<Button type="primary">dsad</Button></span>
            </NavLink>
          </Item>
          <Item key="2">
            <NavLink to='/'>
              <Icon type="heart" />
              <span>Chce pomoc</span>
            </NavLink>
          </Item>
          <Item key="3">
            <NavLink to='/'>
              <Icon type="setting" />
              <span>Ustawienia</span>
            </NavLink>
          </Item>
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
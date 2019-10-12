import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Icon} from 'antd';
import {withRouter} from 'react-router';

const {Item} = Menu;

const Navigation = ({horizontal}) => {

  return (
    <Menu mode={horizontal ? 'horizontal' : 'inline'}>
      <Item key="1">
        <NavLink to='/'>
          <Icon type="ordered-list"/>
          <span>Dashboard</span>
        </NavLink>
      </Item>
      <Item key="2">
        <NavLink to='/'>
          <Icon type="ordered-list"/>
          <span>Ustawienia</span>
        </NavLink>
      </Item>
    </Menu>
  );
};

export default withRouter(Navigation);

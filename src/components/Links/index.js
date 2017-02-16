import React from 'react';
import { Link, Route } from 'react-router-dom';

export const NavLink = (props) => {
  return (
    <Link {...props} />
  );
};

export const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div>
      <Link class={match ? 'link link-active' : 'link'} to={to}>{label}</Link>
    </div>
  )}/>
);

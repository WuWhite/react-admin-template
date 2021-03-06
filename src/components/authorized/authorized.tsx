import React from 'react';
import CheckPermissions, { Authority } from './check-permissions';
import AuthorizedRoute from './authorized-route';
import Secured from './secured';

export interface AuthorizedProps {
  authority?: Authority;
  noMatch?: React.ReactNode;
}

interface Authorized extends React.FC<AuthorizedProps> {
  AuthorizedRoute: typeof AuthorizedRoute;
  check: typeof CheckPermissions;
  Secured: typeof Secured;
}

const Authorized: Authorized = ({ children, authority, noMatch }) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  return CheckPermissions(authority, childrenRender, noMatch) as React.ReactElement;
};

Authorized.AuthorizedRoute = AuthorizedRoute;
Authorized.check = CheckPermissions;
Authorized.Secured = Secured;

export default Authorized;

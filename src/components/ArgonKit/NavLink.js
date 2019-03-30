import React from 'react';
import { Link } from 'rebass';

export const NavLink = props => (
  <Link
    px={2}
    py={1}
    color="inherit"
    {...props}
    css={{ display: 'inline-block', fontWeight: 'bold' }}
  />
);

export default NavLink;

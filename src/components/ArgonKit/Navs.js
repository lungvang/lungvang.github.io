import React from 'react';
import { Flex, Box, Link } from 'rebass';

export const Nav = props => <Flex {...props} as="ul" />;

export const NavItem = props => (
  <Box
    {...props}
    as="li"
    css={{
      listStyle: 'none',
    }}
  />
);

export const NavLink = props => (
  <Link
    px={2}
    py={1}
    color="inherit"
    {...props}
    css={{ display: 'block', fontWeight: 'bold' }}
  />
);

export default {
  Nav,
  NavItem,
  NavLink,
};

import React, { useState } from 'react';
import { Bars } from 'styled-icons/fa-solid/Bars';
import {
  Flex,
  Heading,
  Box,
  Sidebar,
  Nav,
  NavItem,
  NavLink,
  Button,
} from '../ArgonKit';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Box as="header" width={[1]} css={{ position: 'absolute' }}>
      <Flex px={2} alignItems="center">
        <Heading px={2} fontWeight="bold" color="white">
          Lung Vang
        </Heading>
        <Box as="nav" ml="auto" p={2}>
          <Nav css={{ '@media (max-width: 40em)': { display: 'none' } }}>
            <NavItem>
              <NavLink>Consulting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Studio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Craftsman</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
          </Nav>
        </Box>
        <Button
          href="#!"
          p={2}
          color="black"
          bg="transparent"
          css={{ '@media (min-width: 40em)': { display: 'none' } }}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Bars size="32px" />
        </Button>
      </Flex>
      <Sidebar css={{ display: showSidebar ? 'block' : 'none' }}>
        <Button onClick={() => setShowSidebar(!showSidebar)}>Close</Button>
        <NavLink>Consulting</NavLink>
        <NavLink>Studio</NavLink>
        <NavLink>Craftsman</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>About</NavLink>
      </Sidebar>
    </Box>
  );
};

export default Header;

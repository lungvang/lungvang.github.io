import React, { useState } from 'react';
import styled from 'styled-components';
import { display } from 'styled-system';
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

export const ExBox = styled(Box)`
  ${display};
`;

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header>
      <Flex px={2} alignItems="center">
        <Heading px={2} fontWeight="bold">
          Lung Vang
        </Heading>
        <Box as="nav" ml="auto" p={2}>
          <Nav css={{ '@media (max-width: 700px)': { display: 'none' } }}>
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
          css={{ '@media (min-width: 700px)': { display: 'none' } }}
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
    </header>
  );
};

export default Header;

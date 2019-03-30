import React from 'react';
import { Bars } from 'styled-icons/fa-solid/Bars';
import { Flex, Heading, Box, NavLink, Button, Card } from '../ArgonKit';

const Header = () => {
  return (
    <header>
      <Flex px={2} alignItems="center">
        <Heading px={2} fontWeight="bold">
          Lung Vang
        </Heading>
        <Box mx="auto">
          <NavLink>Consulting</NavLink>
          <NavLink>Studio</NavLink>
          <NavLink>Craftsman</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>About</NavLink>
        </Box>
        <Button href="#!" p={2} color="black" bg="transparent">
          <Bars size="32px" />
        </Button>
      </Flex>
      <Card
        p={4}
        py={6}
        backgroundImage="url(https://source.unsplash.com/random/1024x768)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={0}
        color="white"
        bg="darkgray"
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Lung Vang
        </Heading>
      </Card>
    </header>
  );
};

export default Header;

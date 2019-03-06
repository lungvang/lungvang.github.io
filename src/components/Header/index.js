import React from 'react';
import { Bars } from 'styled-icons/fa-solid/Bars';
import { Flex, Heading, Box, Button } from '../ArgonKit';

const Header = () => {
  return (
    <header>
      <Flex px={2} alignItems="center">
        <Heading px={2} fontWeight="bold">
          Rebass
        </Heading>
        <Box mx="auto" />
        <Button href="#!" p={2} color="white">
          <Bars size="32px" />
        </Button>
      </Flex>
    </header>
  );
};

export default Header;

import React from 'react';
import { Box } from 'rebass';

export const Sidebar = props => (
  <Box
    {...props}
    px={2}
    py={1}
    color="white"
    bg="grey.700"
    width={[2 / 3, 1 / 3, 1 / 4]}
    css={{
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      overflow: 'auto',
    }}
  />
);

export default Sidebar;

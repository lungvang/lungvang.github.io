import React from 'react';
import { Box } from 'rebass';

export const Divider = props => (
  <Box
    {...props}
    as="hr"
    bg="gray"
    css={{
      border: 0,
      height: 1,
    }}
  />
);

export default Divider;

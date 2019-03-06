import React from 'react';
import { Text } from 'rebass';

export const Caps = props => (
  <Text
    fontSize={1}
    {...props}
    css={{
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    }}
  />
);

export default Caps;

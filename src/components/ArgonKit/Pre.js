import React from 'react';
import { Text } from 'rebass';

export const Pre = props => (
  <Text
    {...props}
    as="pre"
    fontFamily="Menlo, monospace"
    p={2}
    bg="lightgray"
  />
);

export default Pre;

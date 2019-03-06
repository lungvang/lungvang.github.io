import React from 'react';
import { Link } from 'rebass';

export const BlockLink = props => (
  <Link
    color="inherit"
    {...props}
    css={{ display: 'block', textDecoration: 'none' }}
  />
);

export default BlockLink;

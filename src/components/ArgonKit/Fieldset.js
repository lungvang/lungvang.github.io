import styled from 'styled-components';
import { space, borders } from 'styled-system';

const themed = key => props => props.theme[key];

export const Fieldset = styled.fieldset`
  ${space}
  ${borders}

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }

  ${themed('Fieldset')}
`;

Fieldset.propTypes = {
  ...space.propTypes,
  ...borders.propTypes,
};

Fieldset.displayName = 'Fieldset';

export default Fieldset;

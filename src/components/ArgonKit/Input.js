import styled from 'styled-components';
import { space, width, fontSize, borders } from 'styled-system';

const themed = key => props => props.theme[key];

export const Input = styled.input`
  ${space}
  ${width}
  ${fontSize}
  ${borders}
  font-family: inherit;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
      border-bottom-color: #e5195f;
      outline: 0;
  }

  ${themed('Input')}
`;

Input.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...borders.propTypes,
};

Input.displayName = 'Input';

export default Input;

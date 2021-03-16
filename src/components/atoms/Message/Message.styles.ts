import styled from 'styled-components';
import { Props } from './Message';

export const StyledMessage = styled.p<Props>`
  color: ${(props) => (props.msg.error ? '#e62230' : '#666')};
`;

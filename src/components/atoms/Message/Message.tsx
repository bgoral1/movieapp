import React from 'react';
import { StyledMessage } from './Message.styles';

export interface Msg {
  loading: boolean;
  error: boolean;
  content: string | null;
}

export interface Props {
  msg: Msg;
}

const Message: React.FC<Props> = ({ msg }) => (
  <>
    {msg.loading ? (
      <StyledMessage msg={msg}>Loading...</StyledMessage>
    ) : (
      <StyledMessage msg={msg}>{msg.content}</StyledMessage>
    )}
  </>
);

export default Message;

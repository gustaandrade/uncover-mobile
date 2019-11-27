import React from 'react';

import {Container, Text} from './styles';

export default function Button({text, onPress, disabled}) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text>{text}</Text>
    </Container>
  );
}

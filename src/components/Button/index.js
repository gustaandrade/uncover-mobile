import React from 'react';

import {Container, Text} from './styles';

export default function Button({text, onPress}) {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
}

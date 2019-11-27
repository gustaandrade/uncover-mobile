import React from 'react';

import {Container, Text} from './styles';

export default function Badge({status}) {
  return (
    <Container>
      <Text>{status}</Text>
    </Container>
  );
}

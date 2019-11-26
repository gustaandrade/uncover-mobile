import React from 'react';
import {Text} from 'react-native';

import {Container, Title, BackButtonContainer} from './styles';

export default function Wrapper({title, children, back}) {
  return (
    <Container>
      {title && (
        <>
          {back && (
            <BackButtonContainer onPress={back}>
              <Text>voltar</Text>
            </BackButtonContainer>
          )}
          <Title>{title}</Title>
        </>
      )}

      {children}
    </Container>
  );
}

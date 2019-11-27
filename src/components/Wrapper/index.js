import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TitleContainer, Title, BackButtonContainer} from './styles';

export default function Wrapper({title, children, back}) {
  return (
    <Container>
      {title && (
        <TitleContainer>
          {back && (
            <BackButtonContainer onPress={back}>
              <Icon name="arrow-back" size={32} color="#333" />
            </BackButtonContainer>
          )}
          <Title>{title}</Title>
        </TitleContainer>
      )}

      {children}
    </Container>
  );
}

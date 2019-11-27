import React from 'react';

import Badge from '../../../components/Badge';

import {
  Container,
  ImageBack,
  Content,
  TitleContainer,
  Title,
  Date,
} from './styles';

export default function Company({company, navigation}) {
  return (
    <Container onPress={() => navigation.navigate('CompanyDetail', {company})}>
      <ImageBack source={{uri: company.image}}>
        <Content>
          <Badge status={company.subscribed} />

          <TitleContainer>
            <Title>{company.name}</Title>
            <Date>{company.date}</Date>
          </TitleContainer>
        </Content>
      </ImageBack>
    </Container>
  );
}

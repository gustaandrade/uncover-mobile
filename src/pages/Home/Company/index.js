import React from 'react';
import {View} from 'react-native';

import Badge from '../../../components/Badge';

import {Container, Title, Date} from './styles';

export default function Company({company}) {
  return (
    <Container source={{uri: company.image}}>
      <Badge status="INSCRITO" />

      <View>
        <Title>{company.name}</Title>
        <Date>{company.date}</Date>
      </View>
    </Container>
  );
}

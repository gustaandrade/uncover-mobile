import React from 'react';
import {View} from 'react-native';

import Badge from '../../../components/Badge';

import {Container, ImageBack, Title, Date} from './styles';

export default function Company({company, navigation}) {
  return (
    <Container onPress={() => navigation.navigate('CompanyDetail', {id: 3})}>
      <ImageBack source={{uri: company.image}}>
        <Badge status="INSCRITO" />

        <View>
          <Title>{company.name}</Title>
          <Date>{company.date}</Date>
        </View>
      </ImageBack>
    </Container>
  );
}

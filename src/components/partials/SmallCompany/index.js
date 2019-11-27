import React from 'react';
import {Text, ImageBackground, Image, View} from 'react-native';

import {Container, ImageBG, CompanyText, VisitDate} from './styles';

import Badge from '../../../components/Badge';

export default function SmallCompany({navigation, item}) {
  console.log(navigation);

  const {name, image, date} = item;
  return (
    <Container
      onPress={() => navigation.navigate('CompanyDetail', {company: item})}>
      <ImageBG source={{uri: image}}>
        <View>
          <CompanyText>{name}</CompanyText>
          <VisitDate>{date}</VisitDate>
        </View>
        <Badge status="INSCRITO" />
      </ImageBG>
    </Container>
  );
}

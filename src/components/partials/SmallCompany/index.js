import React from 'react';
import {View} from 'react-native';

import {Container, ImageBG, Content, CompanyText, VisitDate} from './styles';

import Badge from '../../../components/Badge';

export default function SmallCompany({navigation, item}) {
  console.log(navigation);

  const {name, image, date} = item;
  return (
    <Container
      onPress={() => navigation.navigate('CompanyDetail', {company: item})}>
      <ImageBG source={{uri: image}}>
        <Content>
          <View>
            <CompanyText>{name}</CompanyText>
            <VisitDate>{date}</VisitDate>
          </View>
          <Badge status="INSCRITO" />
        </Content>
      </ImageBG>
    </Container>
  );
}

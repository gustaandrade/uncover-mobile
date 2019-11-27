import React from 'react';
import {Text, Image, View} from 'react-native';

import {
  Avatar,
  Container,
  Detailed,
  CompanyMap,
  CompanyDescription,
  Available,
  AvailableContainer,
} from './styles';

import Wrapper from '../../components/Wrapper';

import Button from '../../components/Button';

export default function CompanyDetail({navigation}) {
  const {company} = navigation.state.params;
  return (
    <Wrapper title={company.name} back={() => navigation.goBack()}>
      <Container>
        <Avatar source={{uri: company.image}} />
        <Detailed>
          <Text>{company.date}</Text>
          <AvailableContainer>
            <Available>{company.subscribed}</Available>
          </AvailableContainer>
        </Detailed>
        <CompanyDescription>{company.description}</CompanyDescription>
        <CompanyMap>{company.address}</CompanyMap>
        <Button text="Quero visitar" onPress={() => {}} />
      </Container>
    </Wrapper>
  );
}

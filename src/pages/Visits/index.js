import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Container} from './styles';

import Wrapper from '../../components/Wrapper';
import SmallCompany from '../../components/partials/SmallCompany';
// import { Container } from '../../components/Wrapper/styles';

export default function Visitis({navigation}) {
  let companies = [
    {
      id: 1,
      name: 'Nubank',
      description: 'The purple bank',
      image: 'https://media.glassdoor.com/l/827975/nubank-brasil-office.jpg',
      date: '27/11/2019',
      address: 'Avenida São João, 677',
      subscribed: 'INSCRITO',
    },
    {
      id: 2,
      name: 'Coca-Cola',
      description: 'The refreshing drink',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1lgyHeE3hLZ9BDgOD8MJFYJbNdDm_-0XcZm38gFpF20NB6qXC',
      date: '27/11/2019',
      address: 'Avenida Brasil, 555',
      subscribed: 'DISPONÍVEL',
    },
  ];

  return (
    <>
      <Wrapper title="Próximas visitas">
        <Container>
          {companies &&
            companies.map(item => (
              <SmallCompany key={item.id} item={item} navigation={navigation} />
            ))}

          {/* <TouchableOpacity onPress={() => navigation.navigate('CompanyDetail')}>
          <Text>navigate to company detail</Text>
        </TouchableOpacity> */}
        </Container>
      </Wrapper>
    </>
  );
}

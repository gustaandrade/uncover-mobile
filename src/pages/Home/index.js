import React from 'react';

import Wrapper from '../../components/Wrapper';

import {List} from './styles';
import Company from './Company';

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

export default function Home({navigation}) {
  return (
    <Wrapper title="Experiências">
      <List
        data={companies}
        renderItem={({item}) => (
          <Company company={item} navigation={navigation} />
        )}></List>
    </Wrapper>
  );
}

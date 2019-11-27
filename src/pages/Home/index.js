import React from 'react';

import Wrapper from '../../components/Wrapper';

import {List} from './styles';
import Company from './Company';

let companies = [
  {
    id: 1,
    name: 'Nubank',
    description: 'The purple bank',
    date: '21/06/2020',
    image: 'https://media.glassdoor.com/l/827975/nubank-brasil-office.jpg',
  },
  {
    id: 2,
    name: 'Coca-Cola',
    description: 'The refreshing drink',
    date: '30/10/2020',
    image: 'https://media.glassdoor.com/l/827975/nubank-brasil-office.jpg',
  },
];

export default function Home({navigation}) {
  return (
    <Wrapper title="Experiências">
      <List
        data={companies}
        renderItem={({item}) => <Company company={item} />}></List>
    </Wrapper>
  );
}

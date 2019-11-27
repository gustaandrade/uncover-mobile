import React, {useState} from 'react';

import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';

import {Container} from './styles';
import Interest from './Interest';

const interests = [
  'Corrida de carro',
  'Andar de skate',
  'Musica',
  'Assistir TV',
  'Games',
  'Natacao',
];

export default function Interests({navigation}) {
  const [selecteds, setSelecteds] = useState([]);

  function handleSelect(text) {
    if (selecteds.includes(text)) {
      return setSelecteds(selecteds.filter(item => item !== text));
    }

    return setSelecteds([...selecteds, text]);
  }

  return (
    <Wrapper title="Interesses">
      <Container>
        {interests.map(interest => (
          <Interest text={interest} onPress={handleSelect} key={interest} />
        ))}
      </Container>

      <Button
        text="Proximo"
        onPress={() => navigation.navigate('BottomTabNavigator')}
      />
    </Wrapper>
  );
}

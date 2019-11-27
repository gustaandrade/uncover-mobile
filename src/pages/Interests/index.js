import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';

import Splash from '../../assets/splash.png';

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
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  function handleSelect(text) {
    if (selecteds.includes(text)) {
      return setSelecteds(selecteds.filter(item => item !== text));
    }

    return setSelecteds([...selecteds, text]);
  }

  if (splash) {
    return <Image source={Splash} resizeMode="cover" />;
  }

  return (
    <Wrapper title="Interesses">
      <Container>
        {interests.map(interest => (
          <Interest text={interest} onPress={handleSelect} key={interest} />
        ))}
      </Container>

      <Button
        disabled={selecteds.length < 3}
        text="Proximo"
        onPress={() => navigation.navigate('BottomTabNavigator')}
      />
    </Wrapper>
  );
}

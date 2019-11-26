import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Wrapper from '../../components/Wrapper';

export default function Home({navigation}) {
  return (
    <Wrapper title="Experiências">
      <Text>home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('CompanyDetail')}>
        <Text>navigate to company detail</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}

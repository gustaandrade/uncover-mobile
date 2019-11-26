import React from 'react';
import {Text} from 'react-native';

import Wrapper from '../../components/Wrapper';

export default function CompanyDetail({navigation}) {
  return (
    <Wrapper title="Nome empresa" back={() => navigation.goBack()}>
      <Text>Company Detail</Text>
    </Wrapper>
  );
}

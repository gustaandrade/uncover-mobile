import React from 'react';
import {Text} from 'react-native';

import Wrapper from '../../components/Wrapper';

export default function CompanyDetail({navigation}) {
  const {company} = navigation.state.params;
  return (
    <Wrapper title={company.name} back={() => navigation.goBack()}>
      <Text>Company Detail</Text>
    </Wrapper>
  );
}

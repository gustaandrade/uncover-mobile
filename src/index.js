import React from 'react';
import Routes from './Routes';

import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

export default function App() {
  Icon.loadFont();

  return <Routes />;
}

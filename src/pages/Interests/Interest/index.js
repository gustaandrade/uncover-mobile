import React, {useState} from 'react';

import {Container, Text} from './styles';

export default function Interest({text, onPress}) {
  const [selected, setSelected] = useState(false);

  function handleSelect() {
    setSelected(!selected);

    onPress(text);
  }

  return (
    <Container onPress={handleSelect} selected={selected}>
      <Text selected={selected}>{text}</Text>
    </Container>
  );
}

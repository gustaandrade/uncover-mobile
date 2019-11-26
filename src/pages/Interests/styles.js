import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  height: ${width - 20}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

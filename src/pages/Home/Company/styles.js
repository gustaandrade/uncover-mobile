import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 10},
})`
  height: ${width - 40}px;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #fff;
`;

import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.TouchableOpacity``;

export const ImageBack = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 10},
})`
  height: ${width - 40}px;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

export const TitleContainer = styled.View`
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

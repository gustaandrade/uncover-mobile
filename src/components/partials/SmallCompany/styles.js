import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ImageBG = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 10},
})`
  flex-direction: row;
  height: 100px;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const CompanyText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

export const VisitDate = styled.Text`
  color: white;
  font-size: 12px;
`;

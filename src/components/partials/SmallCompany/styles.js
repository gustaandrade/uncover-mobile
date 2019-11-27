import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const ImageBG = styled.ImageBackground.attrs({
  imageStyle: {borderRadius: 10},
})`
  flex-direction: row;
  height: 100px;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
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

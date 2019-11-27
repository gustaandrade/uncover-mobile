import styled from 'styled-components';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export const Container = styled.View`
  height: 100%;
`;
export const Detailed = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;
export const Available = styled.Text`
  color: #666;
  font-size: 12px;
`;
export const AvailableContainer = styled.View`
  padding: 5px 10px;
  border-radius: 30px;
  border: 1px solid green;
`;
export const AskContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  padding: 5px 60px;
  flex-direction: row;
  justify-content: space-between;
`;
export const AppModal = styled.Modal`
  padding: 10px;
  border-radius: 30px;
  border: 1px solid green;
  height: 100px;
`;
export const CompanyMap = styled.Text`
  color: #3296fa;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const AskText = styled.Text`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const CompanyDescription = styled.Text`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const Avatar = styled.Image`
  width: ${width - 40}px;
  height: ${width - 40}px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  flex: 1;
  padding: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  padding-right: 10px;
`;

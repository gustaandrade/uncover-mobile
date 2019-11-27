import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${props => (props.disabled ? '#d9d9d9' : '#46debb')};
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 30px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;

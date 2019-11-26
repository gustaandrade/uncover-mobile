import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${props => (props.selected ? '#46DEBB' : '#f0f0f0')};
  border-radius: 20px;
  padding: 5px 20px;
  margin: 5px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${props => (props.selected ? '#fff' : '#333')};
`;

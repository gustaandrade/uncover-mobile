import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ProfileImageContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const ProfileImageText = styled.Text`
  margin-top: 10px;
`;

export const FormContainer = styled.View`
  margin-top: 40px;
`;

export const InputContainer = styled.View`
  margin-bottom: 10px;
`;

export const InputTitle = styled.Text``;

export const Input = styled.TextInput`
  border-color: #999999;
  border-bottom-width: 1px;
`;

import React from 'react';

import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';

import {
  Container,
  Content,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageText,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
} from './styles';

export default function Profile() {
  return (
    <Wrapper title="Meu perfil">
      <Container>
        <Content>
          <ProfileImageContainer onPress={() => console.log('teste')}>
            <ProfileImage
              source={{
                uri:
                  'https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg',
              }}
            />
            <ProfileImageText>
              Clique na imagem para alterar seu avatar
            </ProfileImageText>
          </ProfileImageContainer>

          <FormContainer>
            <InputContainer>
              <InputTitle>Nome</InputTitle>
              <Input placeholder="Nome" />
            </InputContainer>

            <InputContainer>
              <InputTitle>Idade</InputTitle>
              <Input placeholder="Idade" />
            </InputContainer>

            <InputContainer>
              <InputTitle>Email</InputTitle>
              <Input placeholder="Email" />
            </InputContainer>

            <InputContainer>
              <InputTitle>Telefone</InputTitle>
              <Input placeholder="Telefone" />
            </InputContainer>
          </FormContainer>
        </Content>

        <Button text="Salvar"></Button>
      </Container>
    </Wrapper>
  );
}

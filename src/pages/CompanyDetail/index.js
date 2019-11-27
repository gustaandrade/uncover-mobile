import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Avatar,
  Container,
  Detailed,
  CompanyMap,
  CompanyDescription,
  Available,
  AvailableContainer,
  AppModal,
  ButtonContainer,
  AskContainer,
  AskText,
} from './styles';

import Wrapper from '../../components/Wrapper';

import Button from '../../components/Button';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CompanyDetail({navigation}) {
  const {company} = navigation.state.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [subscribing, setSubscribing] = useState('DISPONÍVEL');

  return (
    <Wrapper title={company.name} back={() => navigation.goBack()}>
      <Container>
        <Avatar source={{uri: company.image}} />
        <Detailed>
          <Text>{company.date}</Text>
          <AvailableContainer>
            <Available>{subscribing}</Available>
          </AvailableContainer>
        </Detailed>
        <CompanyDescription>{company.description}</CompanyDescription>
        <CompanyMap>{company.address}</CompanyMap>
        <Button
          text="Quero visitar"
          onPress={() => setModalVisible(!modalVisible)}
        />
        <AppModal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.boxContainer}>
              <View style={{marginTop: 22, padding: 40}}>
                <AskContainer>
                  <AskText>Deseja realmente visitar esta empresa?</AskText>
                </AskContainer>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonText}>Calcelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, styles.submitButton]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setSubscribing('INSCRITO');
                    }}>
                    <Text style={styles.buttonText}>Sim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </AppModal>

        {/* <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 320,
  },
  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,
  },
  submitButton: {
    marginLeft: 5,
    backgroundColor: '#70Bd85',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  },
});

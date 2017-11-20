import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import List from "./List";
import male from "./male";

const Modal = () => {
  return (
    <ScrollView style={styles.container}>
     

      <male/>
      <Text
        style={styles.welcome}
        onPress={() => Actions.pop()}
      >
        Go Back
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#123459',
  },
  male:{
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#123490',
    alignItems: 'flex-start',
    margin: 10,
    color: '#ffffff'
  },
  female: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#123490',
    alignItems: 'flex-end',
    margin: 10,
    color: '#ffffff'
  },


  });

export default Modal;

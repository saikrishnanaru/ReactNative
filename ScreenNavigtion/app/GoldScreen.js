import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Row from "./Row";

const GoldScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.Tab4()}
      >
        Tab4
      </Text>
      <Text
        style={styles.welcome}
        onPress={() => Actions.Tab2()}
      >
        Tab2
      </Text>
      <Row/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#997F3D',*/
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default GoldScreen;

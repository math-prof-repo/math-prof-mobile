import React from 'react';
import { StyleSheet, Text, View, DatePickerIOS, Button, TouchableOpacity } from 'react-native';
var axios = require('axios');

export default class Question extends React.Component {

  static navigationOptions = {
    title: 'Yarışma'
  };
  constructor(props) {
    super(props);
  }


  setCevap() {
    alert("deneme");
  };
  render() {
    return (
      <View style={styles.container}>
        

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 250,
    padding: 10,
    margin:5
  },
  soruText: {
    fontSize: 20
  },
  soruDesc: {
    fontSize: 40
  }
});

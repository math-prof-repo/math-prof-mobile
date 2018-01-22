import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
var axios=require('axios');

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  render() {
    return (
        <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

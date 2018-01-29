import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Yarışma Bitti'
  };

  render() {
    return (
      <View style={styles.container}>
        
            <Text>
              Yarışma Bitti
          </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gotoQuestions: {
      alignItems: 'center',
      backgroundColor: '#32CD32',
      width: 250,
      padding: 10,
      margin: 5
    }
  });
  
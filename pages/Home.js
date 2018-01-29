import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Math-prof v1'
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.gotoQuestions}
          onPress={() => this._handlePress()}>
          <Text>
            Yarışmaya Başla
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Quiz');
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

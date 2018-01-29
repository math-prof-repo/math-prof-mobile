import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import HomeScreen from './pages/Home';
import Login from './pages/Login';

class MathProf extends React.Component {
  
  componentDidMount(){
    /*
    user control
      this.props.navigation.navigate('Result');
      or
      
    */
    this.props.navigation.navigate('Home');

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>
            Yükleniyor
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Quiz: {
    screen: Quiz
  },
  Result: {
    screen: Result
  },
  Login:{
    screen:Login
  }
});

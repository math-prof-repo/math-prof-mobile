import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {NavigationActions} from 'react-navigation';
import styles from '.././styles/style';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Math-prof v1'
  };

  componentDidMount() {
    this.userName = this.props.navigation.state.params.userName;
  }

  render() {
    return (
      <View style={styles.quizContainer}>
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
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
          routeName: 'Quiz',
          params: {
            userName: this.userName
          }
        })]
    })
    this
      .props
      .navigation
      .dispatch(resetAction)
  }
}
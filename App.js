import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

var axios = require('axios');

import {StackNavigator} from 'react-navigation';
import {Quiz, Result, UserResult, HomeScreen, Login,Constants} from './imports/imported';
import styles from './styles/style';

class MathProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidMount() {
    /*
    user control
      this.props.navigation.navigate('Result');
      or

    */
    this.methodGet(Constants.serviceUrl+'user');

    //this.props.navigation.navigate('Home');

  }

  methodGet(param) {
    axios
      .get(param + '?userId=' + Expo.Constants.deviceId)
      .then((response) => {
        if (response.data.UserId == undefined || response.data.UserId == null || response.data.UserId == null) {
          this
            .props
            .navigation
            .navigate('Login');
        } else {
          this
            .props
            .navigation
            .navigate('Home', {userName: response.data.UserName});
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };

  render() {
    return (
      <View style={styles.container}>
        <Bubbles size={10} color="#FFF"/>
      </View>
    )
  }
}

export default StackNavigator({
  MathProf: {
    screen: MathProf
  },
  Home: {
    screen: HomeScreen
  },
  Quiz: {
    screen: Quiz
  },
  Result: {
    screen: Result
  },
  UserResult: {
    screen: UserResult
  },
  Login: {
    screen: Login
  }
}, {headerMode: "none"});

async function showFirstContactAsync() {
  // Ask for permisssion to query contacts.
  console.log(Expo.Constants);
  /*const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
  if (permission.status !== 'granted') {
    // Permission was denied...
    return;
  }
  const contacts = await Expo.Contacts.getContactsAsync({
    fields: [
      Expo.Contacts.PHONE_NUMBERS,
      Expo.Contacts.EMAILS,
    ],
    pageSize: 10,
    pageOffset: 0,
  });
  if (contacts.total > 0) {
    Alert.alert(
      'Your first contact is...',
      `Name: ${contacts.data[0].name}\n` +
      `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
      `Emails: ${JSON.stringify(contacts.data[0].emails)}`
    );
  }*/
}

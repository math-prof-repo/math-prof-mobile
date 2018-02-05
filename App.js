import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

var axios = require('axios');

import {
  StackNavigator,
} from 'react-navigation';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import HomeScreen from './pages/Home';
import Login from './pages/Login';

class MathProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  componentDidMount() {
    /*
    user control
      this.props.navigation.navigate('Result');
      or
      
    */
    this.methodGet('http://www.yeslimit.somee.com/api/user');

    //this.props.navigation.navigate('Home');

  }

  methodGet(param) {
    axios.get(param + '?userId=' + Expo.Constants.deviceId)
      .then((response) => {
        if (response.data.UserId == undefined || response.data.UserId == null || response.data.UserId == null) {
          this.props.navigation.navigate('Login');
        } else {
          this.props.navigation.navigate('Home');
        }
      }).catch((error) => {
        console.log(error);
      });

  };

  render() {
    return (
      <View style={styles.container}>
        <Bubbles size={10} color="#FFF" />
        <Bars size={10} color="#FDAAFF" />
        <Pulse size={10} color="#52AB42" />
        <DoubleBounce size={10} color="#1CAFF6" />
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
  Login: {
    screen: Login
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  }
});


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

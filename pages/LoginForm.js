import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
    KeyboardAvoidingView
} from 'react-native';
import 'react-native-message-bar';

var axios = require('axios');
var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;
import styles from '.././styles/style';
import { NavigationActions } from 'react-navigation';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        // Register the alert located on this master page
        // This MessageBar will be accessible from the current (same) component, and from its child component
        // The MessageBar is then declared only once, in your main component.
        MessageBarManager.registerMessageBar(this.refs.alert);
      }

      componentWillUnmount() {
        // Remove the alert located on this master page from the manager
        MessageBarManager.unregisterMessageBar();
      }

   
      onPress(name){
          this.props.onPress(name);
      }

    render() {
        
        return (
            <View style={styles.container}>
             <MessageBarAlert ref="alert" />
                <TextInput
                    style={styles.userInput}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    autoCapitalize = 'none'
                    onChangeText={(name) => { this.setState({ name }) }}/>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {this.onPress(this.state.name)
                    //this.methodPost('http://www.yeslimit.somee.com/api/user');
                }}>
                    <Text style={styles.buttonTextLogin}>LOGIN</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}
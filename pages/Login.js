import React from 'react';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    Image
} from 'react-native';
import LoginForm from '../pages/LoginForm';
var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;
import {NavigationActions} from 'react-navigation';
import styles from '.././styles/style';
var axios = require('axios');

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    methodPost(param, name) {
        var self = this;
        let userData = {
            UserId: Expo.Constants.deviceId,
            UserName: name
        };
        axios
            .post(param, userData)
            .then(function (response) {
                //MessageBarManager.hideAlert();
                console.log(self.props);
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({
                            routeName: 'Home',
                            params: {
                                userName: response.data.UserName
                            }
                        })]
                })
                self
                    .props
                    .navigation
                    .dispatch(resetAction)
            })
            .catch(function (error) {
                console.log(error);
                MessageBarManager.showAlert({
                    title: '',
                    message: error.response.data,
                    alertType: 'error',
                    position: 'top',
                    animationType: 'SlideFromLeft',
                    viewTopOffset: -50, // Default is 0
                    viewLeftOffset: 0, // Default is 0
                    viewRightOffset: 0, // Default is 0

                    // See Properties section for full customization Or check `index.ios.js` or
                    // `index.android.js` for a complete example
                });
            });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.containerLogin}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}/></View>
                <View style={styles.formContainer}>
                    <LoginForm
                        onPress={(name) => this.methodPost('http://www.yeslimit.somee.com/api/user', name)}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

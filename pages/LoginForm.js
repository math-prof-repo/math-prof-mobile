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

export default class Login extends React.Component {

    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        // Register the alert located on this master page
        // This MessageBar will be accessible from the current (same) component, and from its child component
        // The MessageBar is then declared only once, in your main component.
        MessageBarManager.registerMessageBar(this.refs.alert);
        const { navigate } = this.props.navigation; 
      }

      componentWillUnmount() {
        // Remove the alert located on this master page from the manager
        MessageBarManager.unregisterMessageBar();
      }

   

    methodPost(param) {
        
        var self = this;
        let userData = {
            UserId: Expo.Constants.deviceId,
            UserName: this.state.name
        };
        axios
            .post(param, userData)
            .then(function (response) {
                //MessageBarManager.hideAlert();
                navigate('Home',{userName:response.data.UserName});
            })
            .catch(function (error) {
                console.log(error);
                MessageBarManager.showAlert({
                    title: '',
                    message: error.response.data,
                    alertType: 'error',
                    position: 'top',
                    animationType: 'SlideFromLeft',
                    viewTopOffset : -50, // Default is 0
                    viewLeftOffset : 0, // Default is 0
                    viewRightOffset : 0, // Default is 0
                  
                    // See Properties section for full customization
                    // Or check `index.ios.js` or `index.android.js` for a complete example
                });
            });
    }

    render() {
        
        return (
            <View style={styles.container}>
             <MessageBarAlert ref="alert" />
                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    autoCapitalize = 'none'
                    onChangeText={(name) => { this.setState({ name }) }}/>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                    this.methodPost();
                }}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});
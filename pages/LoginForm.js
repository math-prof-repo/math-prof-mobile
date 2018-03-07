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

var axios = require('axios');
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ustbosluk: 3
        };
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
                self
                    .props
                    .navigation
                    .navigate('Home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    onChangeText={(name) => { this.setState({ name }) }}/>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                    this.methodPost('http://www.yeslimit.somee.com/api/user');
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
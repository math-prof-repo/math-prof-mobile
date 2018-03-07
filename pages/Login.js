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

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}/></View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    }
});
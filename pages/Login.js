import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

var axios = require('axios');
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    methodPost(param) {
        var self=this;
        let userData = { UserId: Expo.Constants.deviceId, UserName: this.state.name };
        axios.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request
        })

        axios.post(param,
            userData
        )
            .then(function (response) {
                console.log(response);
                self.props.navigation.navigate('Home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    

    render() {
        return (
            <View>
                <Text>
                    User Name:
                </Text>
                <TextInput
                    placeholder="User Nickname"
                    onChangeText={(name) => { this.setState({ name }) }}
                    underlineColorAndroid="transparent"
                />
                <Button
                    onPress={() => {
                        this.methodPost('http://www.yeslimit.somee.com/api/user');
                    }}
                    title="Kaydol"
                    color="#841584"
                />
            </View>
        );
    }
}

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
        height: 80,
        borderColor: 'black',
        borderWidth: 1,
    }
});
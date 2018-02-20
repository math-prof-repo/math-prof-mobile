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

import { Col, Row, Grid } from "react-native-easy-grid";

var axios = require('axios');
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', ustbosluk: 3 };
    }

    methodPost(param) {
        var self = this;
        let userData = { UserId: Expo.Constants.deviceId, UserName: this.state.name };
        /*axios.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request
        })*/

        axios.post(param,
            userData
        )
            .then(function (response) {
                //console.log(response);
                self.props.navigation.navigate('Home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row size={this.state.ustbosluk}>
                    </Row>
                    <Row style={styles.row} size={1}>
                        <Text>
                            User Name
                         </Text>
                    </Row>
                    <Row style={styles.row} size={1}>
                        <KeyboardAvoidingView style={styles.container}>
                            <TextInput
                                placeholder="User Nickname"
                                onChangeText={(name) => { this.setState({ name }) }}
                                underlineColorAndroid="transparent"
                                style={styles.input}

                            />
                        </KeyboardAvoidingView>
                    </Row>
                    <Row style={styles.row} size={1}>
                        <Button
                            onPress={() => {
                                this.methodPost('http://www.yeslimit.somee.com/api/user');
                            }}
                            title="Kaydol"
                            color="#841584"
                        />
                    </Row>
                    <Row size={7}>
                    </Row>
                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
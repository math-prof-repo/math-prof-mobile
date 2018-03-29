import React from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList,ScrollView} from 'react-native';
import {NavigationActions} from 'react-navigation';
var axios = require('axios');
import Accordion from 'react-native-collapsible/Accordion';
import styles from '.././styles/style';
import {Constants} from '../imports/imported';
import {List, ListItem, ListView,Text} from 'react-native-elements';
export default class UserResult extends React.Component {
  static navigationOptions = {
    title: 'Yarışma Bitti mi acaba'
  };

  constructor(props) {
    super(props);
    let result = [
      {
        AnswerTime: 0,
        Player: 'Player',
        QuestionCount: 0
      }
    ];
    this.state = {
      counter: 10
    };

  }

  componentDidMount() {
    //this.props.navigation.navigate('Result');
    this.userResultObj = this.props.navigation.state.params.userResultObj;
    this.userName = this.props.navigation.state.params.userName;
    this.timer = setInterval(this.tick.bind(this), 1000);
    this.methodPost(Constants.serviceUrl + "answer");
  }

  methodPost(param) {
    var self = this;
    let userData = {
      GameId: this.userResultObj.GameId,
      QuestionCount: this
        .userResultObj
        .Questions
        .filter(x => x.isTrue == "true")
        .length,
      Player: this.userName,
      AnswerTime: this.userResultObj.userAnswerTime
    };
    console.log(this.userResultObj);
    axios
      .post(param, userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tick() {
    if (this.state.counter == 0) {
      this.stopTimer();
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
            routeName: 'Result',
            params: {
              userName: this.userName
            }
          })]
      })
      this
        .props
        .navigation
        .dispatch(resetAction)
    } else {
      this.setState({
        counter: (this.state.counter - 1)
      })
    }
  };

  stopTimer() {
    clearInterval(this.timer)
  };  

  render() {
    const userResult = this.props.navigation.state.params.userResultObj.Questions;
    return (
      <View style={styles.container}>

        <Text h4>Yarışma Bitti Sonuçlarınız</Text>
                  <View>
        <ScrollView>
        <List>
          {userResult.map((item, i) => (<ListItem
            key={i}
            title={'Soru : '+ item.QuestionDesc +' = ' + item.Answer}
            rightTitle={item.userAnswer}
            rightIcon={{name:'person',color:item.isTrue=== "true" ?'green':'red'}}
            leftIcon={{
            name: item.isTrue=== "true" ? 'check-circle' : 'cancel',color:item.isTrue=== "true" ?'green':'red'
          }}/>))
          }
        </List>
        </ScrollView>
        </View>
      </View>
    )
  }

}

const MyText = (props) => {
  return (
    <View style={stil.resultContainer}>
      <View style={stil.section}>
        <Text
          style={{
          'backgroundColor': props.backcolor,
          'fontSize': 15
        }}>
          {props.text1}
        </Text>
      </View>
      <View style={stil.section2}>
        <Text
          style={{
          'backgroundColor': props.backcolor,
          'fontSize': 15
        }}>
          {props.text2}
        </Text>
      </View>
      <View style={stil.section3}>
        <Text
          style={{
          'backgroundColor': props.backcolor,
          'fontSize': 15
        }}>
          {props.text3}
        </Text>
      </View>
    </View>
  )
}

const stil = StyleSheet.create({
  resultContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 1
  },
  subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
  }
})
import React from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList,ScrollView} from 'react-native';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import {NavigationActions} from 'react-navigation';

var axios = require('axios');
import Accordion from 'react-native-collapsible/Accordion';
import styles from '.././styles/style';
import {Constants} from '../imports/imported';
import {List, ListItem, ListView, Text} from 'react-native-elements';

export default class Result extends React.Component {
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
      result: result,
      loader: true
    };
  }

  componentDidMount() {
    this.methodGet(Constants.serviceUrl + 'result');
    this.userName = this.props.navigation.state.params.userName;
    this.state = {
      counter: 10
    };
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  methodGet(param) {
    let self = this;
    axios
      .get(param + "?gameId=0")
      .then((response) => {
        this.setState({result: response.data, loader: false});
      })
      .catch((error) => {
        console.log(error);
      });

  };

  tick() {
    if (this.state.counter == 0) {
      this.stopTimer();
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
            routeName: 'Quiz',
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

  _renderItem = ({item}) => (
    <MyText text={`${item.Player}`}></MyText>
  );

  render() {
    console.log(this.state.result);
    if (this.state.loader) {
      return (
        <View style={styles.container}>
          <Bubbles size={10} color="#FFF"/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Yarışma Bitti
          </Text>
          <View>
            <ScrollView>
              <List>
                {this.state.result.map((item, i) => (<ListItem
                    key={i}
                    title={i.toString()+"  "+item.Player}
                    rightTitle={item.QuestionCount.toString()}
                    rightIcon={{
                    name: item.Player===this.userName?'person':'none'
                  }}/>))
}
              </List>
            </ScrollView>
          </View>
        </View>
      )
    }

  }

}

const MyText = (props) => {
  return (
    <Text
      style={{
      'backgroundColor': props.backcolor,
      'fontSize': 15
    }}>
      {props.text}
    </Text>
  )
}

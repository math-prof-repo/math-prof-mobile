import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
var axios = require('axios');
import Accordion from 'react-native-collapsible/Accordion';

export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Yarışma Bitti mi acaba'
  };

  constructor(props) {
    super(props);
    let result = [{ AnswerTime: 0, Player: 'Player', QuestionCount: 0 }];
    this.state = { counter: 10 };
  }

  componentDidMount() {
    //this.props.navigation.navigate('Result');
    this.userResultObj = this.props.navigation.state.params.userResultObj;
    this.userName = this.props.navigation.state.params.userName;
    this.timer = setInterval(this.tick.bind(this), 1000);
    this.methodPost("http://www.yeslimit.somee.com/api/answer");
  }

  methodPost(param) {
    var self = this;
    let userData = { GameId: this.userResultObj.GameId, QuestionCount: this.userResultObj.Questions.filter(x=>x.isTrue=="true").length, Player: this.userName, AnswerTime: 5 };


    axios.post(param,
      userData
    )
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
      this.props.navigation.navigate('Result', { userName: this.userName });
    }
    else {
      this.setState({ counter: (this.state.counter - 1) })
    }
  };

  stopTimer() {
    clearInterval(this.timer)
  };

  _renderHeader(section) {
    return (
      <View>
        <Text style={styles.titleText}>{section.QuestionDesc}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View>
        <Text>{section.Answer}</Text>
        <Text>{section.isTrue}</Text>
        <Text>{section.userAnswer}</Text>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>
          Yarışma Bitti Sonuçlarınız
          </Text>
        <Accordion
          sections={this.props.navigation.state.params.userResultObj.Questions}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </View>
    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    padding: 10,

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  },
  gotoQuestions: {
    alignItems: 'center',
    backgroundColor: '#32CD32',
    width: 250,
    padding: 10,
    margin: 5
  }
});

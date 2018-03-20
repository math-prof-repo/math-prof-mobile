import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Button,
  TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from '.././styles/style';
import { Constants } from '../imports/imported';

var axios = require('axios');
let questionCount = 0;
export default class Quiz extends React.Component {

  static navigationOptions = {
    title: 'Yarışma',
    header: null
  };
  constructor(props) {
    super(props);
    let repos = {
      Id: 1,
      QuestionDesc: 'yükleniyor',
      Option1: 'yükleniyor',
      Option2: 'yükleniyor',
      Option3: 'yükleniyor',
      Option4: ' yükleniyor'
    };
    this.state = {
      repos: repos,
      soruSayac: 0,
      loaded: false,
      counter: 0,
      count: 20
    };
    this.setCevap = this
      .setCevap
      .bind(this);
  }

  componentDidMount() {
    this.methodGet(Constants.serviceUrl+'values');
    this.userName = this.props.navigation.state.params.userName;
  }

  methodGet(param) {
    axios
      .get(param)
      .then((response) => {
        this.startTimer();
        this.question = response.data;
        this.questionCount = response.data.Questions.length;
        this.setState({loaded: true, repos: this.question.Questions[0]});
      })
      .catch((error) => {
        console.log(error);
      });

  };
  setCevap(userAnswer) {
    this.question.userAnswerTime=this.state.count;
    if (this.question.Questions[this.state.soruSayac].Answer === userAnswer) {
      this.question.Questions[this.state.soruSayac].userAnswer = userAnswer;
      this.question.Questions[this.state.soruSayac].isTrue = "true";
      
    } else {
      this.question.Questions[this.state.soruSayac].userAnswer = userAnswer;
      this.question.Questions[this.state.soruSayac].isTrue = "false";
    }
    
   
    if (this.state.soruSayac + 1 == this.questionCount) {
      this.stopTimer();
      clearInterval(this.timer);
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
            routeName: 'UserResult',
            params: {
              userResultObj: this.question,
              userName: this.userName
            }
          })]
      })
      this
        .props
        .navigation
        .dispatch(resetAction)
    } else {
      var i = this.state.soruSayac;
      this.setState({
        soruSayac: i + 1,
        repos: this.question.Questions[i + 1]
      });
    }

  };
  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)

  };
  stopTimer() {
    clearInterval(this.timer)
  };
  tick() {
    if (this.state.count == 0) {
      this.stopTimer();
      console.log(this.question)
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
            routeName: 'UserResult',
            params: {
              userResultObj: this.question,
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
        count: (this.state.count - 1)
      })
    }
  };
  render() {
    return (
      <View style={styles.quizContainer}>
        <Text style={styles.soruText}>Kalan Süre {this.state.count}</Text>
        <Text style={styles.soruText}>Soru {this.state.soruSayac + 1}</Text>
        <Text style={styles.soruDesc}>{this.state.repos.QuestionDesc}</Text>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap(this.state.repos.Option1)}
          color="#841584">
          <Text>
            {this.state.repos.Option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap(this.state.repos.Option2)}
          color="#841584">
          <Text>
            {this.state.repos.Option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap(this.state.repos.Option3)}
          color="#841584">
          <Text>
            {this.state.repos.Option3}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap(this.state.repos.Option4)}
          color="#841584">
          <Text>
            {this.state.repos.Option4}
          </Text>
        </TouchableOpacity>

      </View>
    );
  };
}

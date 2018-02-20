import React from 'react';
import { StyleSheet, Text, View, DatePickerIOS, Button, TouchableOpacity } from 'react-native';
var axios = require('axios');
let questionCount = 0;
export default class Quiz extends React.Component {

  static navigationOptions = {
    title: 'Yarışma',
    header: null
  };
  constructor(props) {
    super(props);
    let repos = { Id: 1, QuestionDesc: 'yükleniyor', Option1: 'yükleniyor', Option2: 'yükleniyor', Option3: 'yükleniyor', Option4: ' yükleniyor' };
    this.state = { repos: repos, soruSayac: 0, loaded: false, counter: 0, count: 20 };
    this.setCevap = this.setCevap.bind(this);
  }


  componentDidMount() {
    this.methodGet('http://www.yeslimit.somee.com/api/values');
    this.userName = this.props.navigation.state.params.userName;
  }

  methodGet(param) {
    axios.get(param)
      .then((response) => {
        this.startTimer();
        this.question = response.data;
        this.questionCount = response.data.Questions.length;
        this.setState({ loaded: true, repos: this.question.Questions[0] });
      }).catch((error) => {
        console.log(error);
      });

  };
  setCevap(userAnswer) {
    if (this.state.soruSayac + 1 == this.questionCount) {
      this.stopTimer();
      clearInterval(this.timer);
      this.props.navigation.navigate('UserResult', { userResultObj: this.question,userName:this.userName });
    }

    else {
      if (this.question.Questions[this.state.soruSayac].Answer === userAnswer) {
        this.question.Questions[this.state.soruSayac].userAnswer = userAnswer;
        this.question.Questions[this.state.soruSayac].isTrue = "true";
      } else {
        this.question.Questions[this.state.soruSayac].userAnswer = userAnswer;
        this.question.Questions[this.state.soruSayac].isTrue = "false";
      }
      var i = this.state.soruSayac;
      //this.question.Questions[i + 1].userAnswerTime=this.state.count;
      this.setState({ soruSayac: i + 1, repos: this.question.Questions[i + 1] });
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
      this.props.navigation.navigate('UserResult', { userResultObj: this.question ,userName:this.userName});
    }
    else {
      this.setState({ count: (this.state.count - 1) })
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.soruText}>Kalan Süre {this.state.count}</Text>
        <Text style={styles.soruText}>Soru {this.state.soruSayac + 1}</Text>
        <Text style={styles.soruDesc}>{this.state.repos.QuestionDesc}</Text>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap(this.state.repos.Option1)}
          color="#841584"><Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 250,
    padding: 10,
    margin: 5
  },
  soruText: {
    fontSize: 20
  },
  soruDesc: {
    fontSize: 40
  }
});

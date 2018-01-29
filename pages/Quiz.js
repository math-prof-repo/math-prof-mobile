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
    this.state = { repos: repos, soruSayac: 0, loaded: false, counter: 0 };
    this.setCevap = this.setCevap.bind(this)
  }


  componentDidMount() {
    this.methodGet('http://yeslimit.somee.com/api/values');
  }

  methodGet(param) {
    axios.get('http://yeslimit.somee.com/api/values')
      .then((response) => {
        this.question = response.data;
        this.questionCount = response.data.length;
        this.setState({ loaded: true, repos: this.question[0] });
      }).catch((error) => {
        console.log(error);
      });

  };
  setCevap() {
    if (this.state.soruSayac + 1 == this.questionCount)
      this.props.navigation.navigate('Result');
    else {
      var i = this.state.soruSayac;
      this.setState({ soruSayac: i + 1, repos: this.question[i + 1] });
    }

  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.soruText}>Soru {this.state.soruSayac + 1}</Text>
        <Text style={styles.soruDesc}>{this.state.repos.QuestionDesc}</Text>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap()}
          color="#841584"><Text>
            {this.state.repos.Option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap()}
          color="#841584">
          <Text>
            {this.state.repos.Option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap()}
          color="#841584">
          <Text>
            {this.state.repos.Option3}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => this.setCevap()}
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

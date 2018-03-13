import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { NavigationActions } from 'react-navigation';

var axios = require('axios');
import Accordion from 'react-native-collapsible/Accordion';

export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Yarışma Bitti mi acaba'
  };

  constructor(props) {
    super(props);
    let result = [{ AnswerTime: 0, Player: 'Player', QuestionCount: 0 }];
    this.state = { result: result, loader: true };
  }

  componentDidMount() {
    this.methodGet('http://www.yeslimit.somee.com/api/result');
    this.state = { counter: 10 };
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  methodGet(param) {
    let self = this;
    axios.get(param+"?gameId=0")
      .then((response) => {
        this.setState({ result: response.data, loader: false });
      }).catch((error) => {
        console.log(error);
      });

  };


    

    tick() {
      if (this.state.counter == 0) {
        this.stopTimer();
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Quiz', params:{userName: this.props.navigation.state.params.userName}})
          ]
        })
        this.props.navigation.dispatch(resetAction)
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
        <Text style={styles.titleText}>{section.Player}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View>
        <Text>{section.Player}</Text>
      </View>
    );
  }


  render() {
    if (this.state.loader) {
      return (<View style={styles.container}>
        <Bubbles size={10} color="#FFF" />
      </View>)
    } else {
      return (
        <View style={styles.container}>

          <Text style={styles.headerText}>
            Yarışma Bitti
            </Text>
          <Accordion
            sections={this.state.result}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </View>
      )
    }

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

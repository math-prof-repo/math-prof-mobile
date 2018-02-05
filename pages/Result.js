import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
var axios = require('axios');
import Accordion  from 'react-native-collapsible/Accordion';

export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Yarışma Bitti mi acaba'
  };

  constructor(props) {
    super(props);
    let result=[{AnswerTime:0,Player:'Player',QuestionCount:0}];
    this.state={result:result};
}

  componentDidMount(){
    this.methodGet('http://www.yeslimit.somee.com/api/result');
  }

  methodGet(param) {
    let self=this;
    axios.get(param )
      .then((response) => {
        this.setState({result:response.data});
       console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });

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
    console.log(this.state);
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



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',

      padding:10,
      
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerText: {
      fontSize: 50,
      fontWeight: 'bold',
      padding:10
    },
    gotoQuestions: {
      alignItems: 'center',
      backgroundColor: '#32CD32',
      width: 250,
      padding: 10,
      margin: 5
    }
  });
  
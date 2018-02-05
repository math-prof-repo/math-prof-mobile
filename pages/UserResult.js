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
}

  componentDidMount(){
  }


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
      </View>
    );
  }


  render() {
    console.log(this.props.navigation.state.params.userResultArray);
    return (
      <View style={styles.container}>
        
          <Text style={styles.headerText}>
              Yarışma Bitti Sonuçlarınız
          </Text> 
          <Accordion
            sections={this.props.navigation.state.params.userResultArray}
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
  
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
}

  componentDidMount(){
    this.methodGet('http://www.yeslimit.somee.com/api/result');
  }

  methodGet(param) {
    axios.get(param)
      .then((response) => {
       console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });

  };


  _renderHeader(section) {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        
            <Text>
              Yarışma Bitti
          </Text> 
          <Accordion
            sections={SECTIONS}
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    gotoQuestions: {
      alignItems: 'center',
      backgroundColor: '#32CD32',
      width: 250,
      padding: 10,
      margin: 5
    }
  });
  

  const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...'
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...'
    }
  ];
import React from 'react';
import { StyleSheet, Text, View,DatePickerIOS } from 'react-native';
var axios=require('axios');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    let repos =[{Id:1,QuestionDesc:'yükleniyor',Option1:'yükleniyor',Option2:'yükleniyor',Option3:'yükleniyor',Option4:' yükleniyor'}];
    this.state = { repos: repos ,soruSayac:0,loaded: false,count:10};
  }


  componentDidMount() {
    this.methodGet('http://yeslimit.somee.com/api/values');
  }

  methodGet(param) {
    axios.get('http://yeslimit.somee.com/api/values')
    .then((response) => {
      console.log(response.data );
       this.question = response.data;
       this.setState({loaded:true,repos:this.question[this.state.soruSayac]});
    }).catch((error) => {
      console.log(error);
    });

  }

  render() {
    console.log(this.state.repos);
    return (
      <View style={styles.container}>
        <Text>asdasd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

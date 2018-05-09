import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addCard } from './../actions/index'

import { mainColor } from './../util/colors'

class AddCard extends Component{
  static navigationOptions = {
    title: 'Add Card',
    headerTintColor: '#fff',
    headerStyle:{
      backgroundColor: mainColor,
    },
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  };

  state ={
    question: '',
    answer: ''
  }

  submit = () => {
    console.log(this.props)

    this.props.dispatch(addCard(this.state.question, this.state.answer, this.props.deck))

    this.setState(() => ({
      question: '',
      answer: ''
    }))

  }

  render(){


    return(
      <View style={styles.container}>
        <Text style={styles.title}>Question</Text>
        <TextInput style={styles.textInput}
          onChangeText={(question) => this.setState({question: question})}
          value={this.state.question}/>
        <Text style={styles.title}>Answer</Text>
        <TextInput style={styles.textInput}
          onChangeText={(answer) => this.setState({answer: answer})}
          value={this.state.answer}/>
        <TouchableOpacity style={styles.iosButton}
          onPress={this.submit}>
          <Text style={styles.submitButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'

  },
  text: {
    color: '#606',
    margin: 20,

  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    color: mainColor,

  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  iosButton: {
   backgroundColor: mainColor,
   padding: 10,
   borderRadius: 7,
   height: 45,
   marginLeft: 40,
   marginRight: 40,
 },
  textInput:{
    height: 50,
    width: 300,
    borderColor: mainColor,
    borderWidth: 1,
    borderRadius: 10,
    margin: 25,
    padding: 10,
    textAlign: 'center',
  }
});


function mapStateToProps({}, {navigation}){
  return {
    deck: navigation.state.params.deck
  }

}


export default connect(mapStateToProps)(AddCard)

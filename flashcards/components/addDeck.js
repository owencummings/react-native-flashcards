import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { addDeck } from './../actions/index'
import { mainColor, shadowColor } from './../util/colors'


class AddDeck extends Component{
  state = {
    text: ''
  }


  submit = () =>{

    //dispatch the action
    this.props.dispatch(addDeck(this.state.text))

    this.setState(() => ({text: ''}))

    //reset the state (but doesn't really matter?)
    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Add a Deck</Text>
        <TextInput style={styles.textInput}
          onChangeText={(title) => this.setState({text: title})}
          value={this.state.text}
          />
        <TouchableOpacity style={styles.iosButton} onPress={this.submit}>
          <Text style={styles.submitButtonText}>Create</Text>
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

export default connect()(AddDeck)

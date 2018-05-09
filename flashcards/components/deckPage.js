import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { mainColor, gray } from './../util/colors'

class DeckPage extends Component{

  static navigationOptions = {
    title: 'Deck Page',
    headerTintColor: '#fff',
    headerStyle:{
      backgroundColor: mainColor,
    },
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.deck}</Text>
        <Text style={styles.body}>This deck has {Object.keys(this.props.decks[this.props.deck]).length} card(s).</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            {deck: this.props.deck}
          )}>
          <Text style={styles.buttonText}>Add a Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {deck: this.props.deck}
          )}>
          <Text style={styles.buttonText}>Take Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
    headerStyle: {
      backgroundColor: '#e74c3c', // <-- orangey red
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white'
    },
  })

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  title:{
    fontSize: 22,
    color: mainColor,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  body:{
    color: gray,
    textAlign: 'center',
    margin: 10
  },
  button:{
    backgroundColor: mainColor,
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

function mapStateToProps({decks}, {navigation}){
  return {
    decks: decks,
    deck: navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(DeckPage)

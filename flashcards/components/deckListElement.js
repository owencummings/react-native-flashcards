import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import { mainColor, gray } from './../util/colors'

class DeckListElement extends Component{
  render(){
    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.deck}</Text>
        <Text style={styles.cards}>{Object.keys(this.props.decks[this.props.deck]).length} cards</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    margin: 10,
    borderColor: '#FFF',
    borderWidth: 1
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: mainColor
  },
  cards:{
    fontSize: 14,
    color: gray
  }
})

function mapStateToProps({decks}, {deck}){
  return {
    deck: deck,
    decks: decks
  }
}
export default connect(mapStateToProps)(DeckListElement)

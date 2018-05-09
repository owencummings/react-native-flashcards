import React, { Component } from 'react';
import { shadowColor, mainColor } from './../util/colors'
import { connect } from 'react-redux'
import { handleInitialData } from './../actions/index'

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import DeckListElement from './deckListElement';

class DeckList extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
    console.log('In mount')
    console.log(this.props.decks)

  }

  render(){
    console.log('In render')
    console.log(this.props.decks)
    return(
      <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Your Decks</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {Object.keys(this.props.decks).map((deck) =>(
          <DeckListElement
            onPress={() => this.props.navigation.navigate(
              'DeckPage',
              {deck: deck}
            )}
            key={deck} deck={deck} />
        ))}
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center'
  },
  scrollContainer:{
    flex: 2,
    backgroundColor: '#fff',
    padding: 10
  },
  text: {
    color: '#606'
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  titleBar:{
    backgroundColor: mainColor,
    paddingTop: 20,
    paddingBottom: 10
  }
});


function mapStateToProps({ decks }){
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(DeckList)

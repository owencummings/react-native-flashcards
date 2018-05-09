import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { mainColor, shadowColor } from './util/colors'
import reducer from './reducers/index'
import middleware from './middleware/index'

import { handleInitialData } from './actions/index'

import AddDeck from './components/addDeck'
import DeckList from './components/deckList'
import DeckPage from './components/deckPage'
import AddCard from './components/addCard'
import Quiz from './components/quiz'

import { FontAwesome, Ionicons } from '@expo/vector-icons'


function OurStatusBar({backgroundColor, ...props}){
  return(
    <View>
      <StatusBar style={{backgroundColor: backgroundColor, height: Constants.statusBarHeight}} {...props} />
    </View>
  )

}


const Tabs = TabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: shadowColor,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      height: 56,
      backgroundColor: mainColor,
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckPage: {
    screen: DeckPage,
  },
  AddCard: {
    screen: AddCard,
  },
  Quiz: {
    screen: Quiz
  },
}, {
  mode: 'modal'
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    color: '#606'
  }
});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={styles.container}>
          <OurStatusBar backgroundColor={mainColor} barStyle="light-content" />

          <MainNavigator />
        </View>
      </Provider>

    );
  }
}

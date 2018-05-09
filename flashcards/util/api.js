import { AsyncStorage } from 'react-native'


const STORAGE_KEY = 'Flashcards:deckList'

export function fetchDeckList(){
  return AsyncStorage.getItem(STORAGE_KEY).then(
    //?
  )
}

export function addDeck({deck, key}){

}


export function addCard({deck, card, deckKey, cardKey}){

}

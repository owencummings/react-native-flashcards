
export const RECIEVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDeck (deck) {
  return {
    type: RECEIVE_Deck,
    deck,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard(question, answer, deck){
  return {
    type: ADD_CARD,
    question,
    answer,
    deck,
  }
}

export function handleInitialData(){
  return (dispatch) => {
    dispatch(addDeck('Starter Deck'))
    dispatch(addCard('What is the capital of Spain?', 'Madrid', 'Starter Deck'))
    dispatch(addCard('What is the capital of Trinidad?', 'Port of Spain', 'Starter Deck'))
  }
}

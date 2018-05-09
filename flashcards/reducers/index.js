import { RECIEVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'
import { combineReducers } from 'redux';

function decks (state = {}, action){
  switch (action.type){
    case RECIEVE_DECKS:
      return state
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {}
      }
    case ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          [action.question]: action.answer
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  decks,
})

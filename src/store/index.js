
import {combineReducers, createStore} from 'redux';
const personReducer = (state = {},{type,payload}) => {
  // console.log(actions)
  if(type === 'UPDATE_PERSON'){
    return {name:payload}
  }
  return state;
}

const gameReducer = (state = {},{type,payload}) => {
  // console.log(actions)
  if(type === 'UPDATE_GAME'){
    return {name:payload}
  }
  return state;
}

const allReducer = combineReducers({game:gameReducer,person:personReducer});

const InitialStates = {
  game: {name:'Football'},
  person: {name:'Mahedi'}
} 
const store = createStore(allReducer,InitialStates);
console.log(store.getState())

store.dispatch({type:'UPDATE_PERSON',payload:'hasan'})
console.log(store.getState())

export default store;
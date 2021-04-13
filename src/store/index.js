import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const allReducer = combineReducers({game:gameReducer,person:personReducer,users:userReducer});

const InitialStates = {
  person: {name:'Mahedi'},
  game: {name:'Football'},
  users: []
} 

const middleware  = [thunk];

const store = createStore(allReducer,InitialStates,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

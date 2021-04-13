import {UPDATE_PERSON} from '../actions/personAction';

const personReducer = (state = {},{type,payload}) => {
    // console.log(actions)
    switch (type) {
      case UPDATE_PERSON:
        return Object.assign({},state,{name:payload})
      default:
        return state;
    }
  }

  export default personReducer;
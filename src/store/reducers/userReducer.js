import {UPDATE_USER} from '../actions/userAction';

const userReducer = (state = {},{type,payload}) => {
    // console.log(actions)
    switch (type) {
      case UPDATE_USER:
        return payload
      default:
        return state;
    }
  }

  export default userReducer;
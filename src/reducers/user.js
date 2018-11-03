// import {loadState} from '../localStorage.js'

let initialState = {loggedIn: false,
                    userName: 'guest'}


function user(state = initialState, action){
  switch(action.type){
    case 'USER_LOGGED_IN':
      return Object.assign({}, state, {loggedIn: true})
    case 'USER_LOGGED_OUT':
      return Object.assign({}, state, {loggedIn: false})
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {userName: action.username})
    default:
      return state
  }
}

export default user;

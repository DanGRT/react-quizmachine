

let initialState = {loggedIn: false,
                    userName: 'guest',
                    highScore: 0}


function user(state = initialState, action){
  switch(action.type){
    case 'USER_LOGGED_IN':
      return Object.assign({}, state, {loggedIn: true})
    case 'USER_LOGGED_OUT':
      return Object.assign({}, state, {loggedIn: false})
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {userName: action.username})
    case 'NEW_PERSONAL_BEST':
      return Object.assign({}, state, {highScore: action.highscore})
    default:
      return state
  }
}

export default user;

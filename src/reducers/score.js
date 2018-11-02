let initialState = 0

function score(state = initialState, action){
  switch(action.type){
    case 'INCREMENT_SCORE':
      let newState = state + 1
      return newState
    case 'RESET_SCORE':
      return initialState
    default:
      return state
  }
}


export default score

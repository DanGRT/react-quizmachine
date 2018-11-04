let initialState = {
  showHiScoreBanner: false,
}

function display(state = initialState, action){
  switch(action.type){
    case 'SHOW_HIGH_SCORE_BANNER':
      return Object.assign({}, state, {showHiScoreBanner: true})
    case 'HIDE_HIGH_SCORE_BANNER':
      return Object.assign({}, state, {showHiScoreBanner: false})
    default:
    return state
  }

}


export default display

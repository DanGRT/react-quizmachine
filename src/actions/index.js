export function receiveQuestion(question){
  return {
    type: 'RECEIVE_QUESTION',
    question
  }
}

export function fetchQuestionFromAPI(){
  return function(dispatch){
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => response.json())
    .then(result => {
      dispatch(receiveQuestion(result.results[0]))
    })
}
}


export function incrementScore(){
  return {
    type: 'INCREMENT_SCORE'
  }
}
export function resetScore(){
  return {
    type: 'RESET_SCORE'
  }
}

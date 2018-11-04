import {loadState} from '../localStorage.js'

//question

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


//score

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


//display
export function showHighScoreBanner(){
  return {
    type: 'SHOW_HIGH_SCORE_BANNER',
    showHiScoreBanner: true
  }
}

export function hideHighScoreBanner(){
  return {
    type: 'HIDE_HIGH_SCORE_BANNER',
    showHiScoreBanner: false
  }
}

//User

export function logIn(){
  return {
    type: 'USER_LOGGED_IN',
    loggedIn: true
  }
}

export function logOut(){
  return {
    type: 'USER_LOGGED_OUT',
    loggedIn: false
  }
}

export function updateUsername(username){
  console.log(username)
  return {
    type: 'UPDATE_USERNAME',
    username
  }
}

export function newPersonalBest(highscore){
  return {
    type: 'NEW_PERSONAL_BEST',
    highscore
  }
}

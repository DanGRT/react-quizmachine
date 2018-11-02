function question(state = {}, action){
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      const answersArray = shuffleAnswers(action.question.correct_answer, action.question.incorrect_answers)
      const questionObject = Object.assign({}, action.question, {answers: answersArray})
      return questionObject
    default:
      return state
  }
}

function shuffleAnswers(correctAnswer, incorrectAnswers){
  const positionRandom = Math.floor(Math.random() * 4)
  let answersArray = incorrectAnswers
  answersArray.splice(positionRandom, 0, correctAnswer)
  return answersArray

}

export default question;

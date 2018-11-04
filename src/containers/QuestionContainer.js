import { connect } from 'react-redux'
import Question from '../components/Question.js'
import {fetchQuestionFromAPI, incrementScore, resetScore, newPersonalBest, showHighScoreBanner, hideHighScoreBanner } from '../actions'

const mapStateToProps = state => {
  return {
    user: state.user,
    question: state.question,
    score: state.score,
    display: state.display
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI()),
    incrementScore: () => dispatch(incrementScore()),
    resetScore: () => dispatch(resetScore()),
    newPersonalBest: (score) => dispatch(newPersonalBest(score)),
    showHighScoreBanner: () => dispatch(showHighScoreBanner()),
    hideHighScoreBanner: () => dispatch(hideHighScoreBanner())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question)

import { connect } from 'react-redux'
import Question from '../components/Question.js'
import {fetchQuestionFromAPI, incrementScore, resetScore } from '../actions'

const mapStateToProps = state => {
  return {
    question: state.question,
    score: state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI()),
    incrementScore: () => dispatch(incrementScore()),
    resetScore: () => dispatch(resetScore())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question)

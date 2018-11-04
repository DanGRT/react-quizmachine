import React from 'react'
import { decode } from 'he'


class Question extends React.Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount(){
    console.log('1) calling fetchQuestion')
    this.props.fetchQuestion()

  }


  componentWillReceiveProps(nextProps){
    if (nextProps.score > this.props.user.highScore){
      console.log('highscore')
      this.props.newPersonalBest(nextProps.score)
      this.props.showHighScoreBanner()

  }
}

  handleClick(event){
    if (event.target.value === this.props.question.correct_answer){
      this.props.incrementScore()
      this.props.fetchQuestion()

    }else{
      this.props.resetScore()
      this.props.hideHighScoreBanner()
      this.props.fetchQuestion()
    }

  }





  render(){
    const {question, score, display} = this.props

    return(
      <React.Fragment >
      {question.hasOwnProperty('question')
        ? <h3>{decode(question.question)}</h3>
        : null}
        {question.hasOwnProperty('answers')
          ? question.answers.map(answer => <button onClick={this.handleClick} value={answer} key={answer}>{decode(answer)}</button>)
          : null}

      <h3>Your score is {score}</h3>
      {display.showHiScoreBanner
        ? <h3>NEW PERSONAL BEST</h3>
        : null}


      </React.Fragment>


    )
  }
}


export default Question

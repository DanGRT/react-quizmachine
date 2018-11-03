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

  handleClick(event){
    if (event.target.textContent === this.props.question.correct_answer){
      this.props.incrementScore()
      this.props.fetchQuestion()
    }else{
      this.props.resetScore()
      this.props.fetchQuestion()
    }

  }



  render(){
    const {question, score} = this.props

    return(
      <React.Fragment >
      {question.hasOwnProperty('question')
        ? <h3>{decode(question.question)}</h3>
        : null}
        {question.hasOwnProperty('answers')
          ? question.answers.map(answer => <button onClick={this.handleClick} key={answer}>{answer}</button>)
          : null}

      <h3>Your score is {score}</h3>


      </React.Fragment>


    )
  }
}


export default Question

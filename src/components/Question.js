import React from 'react'


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
    console.log(this.props.question)

    return(
      <React.Fragment >
      <h3>{this.props.question.question}</h3>
        {this.props.question.hasOwnProperty('answers')
          ? this.props.question.answers.map(answer => <button onClick={this.handleClick} key={answer}>{answer}</button>)
          : null}

      <h3>Your score is {this.props.score}</h3>


      </React.Fragment>


    )
  }
}


export default Question

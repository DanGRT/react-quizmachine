import React from 'react';
import QuestionContainer from '../containers/QuestionContainer.js'
import LogInContainer from '../containers/LogInContainer.js'
import Header from './Header'

class App extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>
      <Header />
      {!this.props.user.loggedIn
        ? <LogInContainer />
        : <QuestionContainer />}
      </div>
    )
  }
}


export default App;

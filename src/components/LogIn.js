import React from 'react'


class Login extends React.Component{
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleLogin(){
    this.props.logIn()
  }

  handleChange(event){
    this.props.updateUsername(event.target.value)
  }

  handleRegister(event){
    event.preventDefault()
    this.props.logIn()



  }


  render(){
    return (
      <section>
        <h3>Hi, {this.props.user.userName}</h3>
          <button onClick={this.handleLogin}>Get Started...</button>
          <h3>Or, if you want to track your achievements, create an account</h3>
          <form onSubmit={this.handleRegister}>
          <input onChange={this.handleChange} type="text"></input>
          <button type="submit">Register</button>
          </form>

      </section>
    )

  }
}


export default Login

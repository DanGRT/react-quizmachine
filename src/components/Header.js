import React from 'react'


class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <header className="header">
      <nav className='header-nav'>
      <h1>Quiz Site</h1>
      <a href="#">User</a>
      </nav>
      </header>
    )
  }
}

export default Header

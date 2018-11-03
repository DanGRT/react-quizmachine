import { connect } from 'react-redux'
import { logIn, logOut, updateUsername} from '../actions'
import LogIn from '../components/LogIn.js'


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn()),
    updateUsername: (name) => dispatch(updateUsername(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

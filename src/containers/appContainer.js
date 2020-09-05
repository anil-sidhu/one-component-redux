import { connect } from 'react-redux'
import {addTodo} from  '../redux/actions.js'
import App from '../App'

const mapStateToProps = state => ({
    todos: state.todos
  })
  
  const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(addTodo(id))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(App)

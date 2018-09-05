import React, { Component } from 'react';
import { Input, Form, Button } from '../elements/input'
import { getAuthen } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: '',
    }
  }

  onSignin = (e) => {
    e.preventDefault()
    this.props.getAuthen(this.state.username, this.state.password)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 
    const {username, password} = this.state
    const {from} = this.props.allProps.location.state || { from: {pathname: '/'}}

    if (this.props.isAuthen)
      return(
        <Redirect to={from} />
      )

    return (
      <div>
        <Form> 
          <Input 
            onChange={this.onChange} 
            value={username}
            name="username"
            type="text" 
            placeholder="username" />
          <Input 
            onChange={this.onChange} 
            value={password}
            name="password"
            type="password" 
            placeholder="password" />
          <Button onClick={this.onSignin}>Login</Button> 
        </Form>  
      </div>
    );
  }
}
 
const mapStateToProps = state => ({
  message: state.auth.message,
  error: state.auth.error,
  isAuthen: state.auth.isAuthenticated
})

export default connect( mapStateToProps, { getAuthen })(LoginForm)
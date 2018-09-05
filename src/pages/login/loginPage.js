import React, { Component } from 'react';
import LoginForm from '../../components/loginForm'

class LoginPage extends Component {
  render() { 

    return ( 
      <div>
        <h2>Login</h2>
        <hr />
        <LoginForm allProps={this.props}></LoginForm>
      </div>
     );
  }
}
 
export default LoginPage;
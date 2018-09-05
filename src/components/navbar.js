
import React, { Component } from 'react';
import { Navlist, NavUl } from '../elements/list'
import { Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logOut } from '../actions/authActions'
const LogoutNav = styled(Navlist)`
  float:right;
`

class Navbar extends Component {

  state = {
    redirect: false,
  }

  componentDidMount(){
    this.props.isAuthen ? this.setState({redirect: false}) : this.setState({redirect: true})
  }

  render() { 
    const LogoutButton = withRouter(
      ({history}) => this.props.isAuthen 
      ? (<LogoutNav><a onClick={()=> {
            this.props.logOut()
            history.push("/home")
          }}>Logout</a></LogoutNav>) 
      : (<LogoutNav><Link to="/login">Login</Link></LogoutNav>))

    if(this.props.isAuthen){
      return (
        <NavUl>
          <Navlist><Link to="/Home">Home</Link></Navlist>
          <Navlist><Link to="/Product">Product</Link></Navlist>
          <Navlist><a href="#New">News</a></Navlist>
          <Navlist><a href="#Contact">Contact</a></Navlist>
          <LogoutButton></LogoutButton>
        </NavUl>
      )
    }
    return (
        <NavUl>
          <Navlist><Link to="/Home">Home</Link></Navlist>
          <LogoutButton></LogoutButton>
        </NavUl>
    )
  }
}

const mapStateToProps = state => ({
  message: state.auth.message,
  error: state.auth.error,
  isAuthen: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logOut })(Navbar)
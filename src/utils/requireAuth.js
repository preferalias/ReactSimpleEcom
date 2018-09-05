import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default (ComposedComponent) => {
  class Authenticate extends React.Component{
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.context.router.history.push('/login')
      }
    }
    render(){
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired 
  }
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, {} )(Authenticate)
}
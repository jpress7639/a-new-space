import React, { Component } from 'react'
import { Link } from 'react-router-dom'
  
export default class Home extends Component {
  render() {
    return (
      <>
        <p>Take me to a new <Link to='/users/sign-in-user'>Space</Link></p>
      </>
    )
  }
}
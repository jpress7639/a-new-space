import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
  
export default class Home extends Component {
  render() {
    return (
      <>
        <h1 className="intro">Take me to a new <Link to='/users/sign-in-user'><br></br><button>Space</button></Link></h1>
      </>
    )
  }
}
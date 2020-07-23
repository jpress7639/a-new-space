import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StarField from '../../components/StarAnimation/StarAnimation'
import './Home.css'
// import Modal from '../../components/Modal/Modal'
  
export default class Home extends Component {
  render() {
    return (
      <>
        <StarField />
        <h1 className="intro">Take me to a new <Link to='/users/sign-in-user'><br></br><button>Space</button></Link></h1>
        {/* <Modal /> */}
      </>
    )
  }
}
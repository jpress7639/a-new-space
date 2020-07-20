import React, { Component } from 'react'
import { getUsers } from '../../Services/users'
import './SignIn.css'
import {Redirect, Link} from 'react-router-dom'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: [],
      signedIn: false,
      email: '',
      password: ''
    }
  }
  handleChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  async componentDidMount() {
    const userData = await getUsers()
    this.setState({
      users: userData
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const currentUser = this.state.users.find(user => 
      user.email === this.state.email && user.password === this.state.password
    )
    if (currentUser) {
      this.setState({
        currentUser: currentUser,
        signedIn: true
      })
    } else {
      alert('User not found')
    }
  }
  
  render() {
    const {signedIn} = this.state
    if (signedIn) {
      return <Redirect to={`/users/${this.state.currentUser._id}`} />
    }
    return (
      <>
        <h1>Welcome</h1>
        <form className='container'>
          <input type='text' name='email' onChange={this.handleChange} placeholder='Email' />
          <input type='text' name='password' onChange={this.handleChange} placeholder='Password' />
          <button onClick={this.handleClick}>Lets Jam</button>
          <p className='user-response'></p>
        </form>
        <Link to='/users/create-users'>Sign Up</Link>
      </>
    )
  }
}

export default SignIn
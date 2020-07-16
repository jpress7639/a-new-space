import React, { Component } from 'react'
import { getUsers } from '../../Services/users'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChangeEmail = (e) => {
    const change = e.target.value
    this.setState({
      email: change
    })
  }
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <form className='container'>
          <input type='text' onChange={e => this.handleChangeEmail(e)} placeholder='Email'></input>
          <input type='text' onChange={e => this.handleChangePassword(e)} placeholder='Password'></input>
          <button >Lets Jam</button>
        </form>
        <p>Sign up</p>
      </>
    )
  }
}

export default SignIn
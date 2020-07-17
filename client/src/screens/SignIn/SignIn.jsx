import React, { Component } from 'react'
import { getUsers } from '../../Services/users'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      user: [],
      queryUser: {
        email: '',
        password: ''
      }
    }
  }
  handleChange = (e) => { 
    const { name, value } = e.target
    this.setState({
      queryUser: {
        [name]: value
      }
    })
  }
  
  async componentDidMount()  {
    const userData = await getUsers()
    this.setState({
      user: userData
    })
  }


  render() {
    return (
      <>
        <h1>Welcome</h1>
        <form className='container'>
          <input type='text' name='email' onChange={this.handleChange} placeholder='Email' />
          <input type='text' name='password' onChange={this.handleChange} placeholder='Password' />
          <button onClick={this.handleClick}>Lets Jam</button>
        </form>
        <p>Sign up</p>
      </>
    )
  }
}

export default SignIn
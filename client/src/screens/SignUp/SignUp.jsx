import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { createUser } from "../../Services/users"
import './SignUp.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      created: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createUser(this.state.user)
    this.setState ({ created })
  }

  render() {
    const {created} = this.state
    if (created) {
      return <Redirect to={`/`} />
    }

    return (
      <>
        <h1>Let's Get Started</h1>
          <form className= "signup-form">
            <input
              className="input-first"
              placeholder="Full Name"
              name="firstName"
              onChange={this.handleChange}
            />
            <input
              className="input-last"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleChange}
            />
            <input
              className="input-email"
              placeholder="Email Address"
              name="email"
              onChange={this.handleChange}
            />
            <input
              className="input-password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
            <Link to='/'><button type='submit' className= "signup-button">SIGN UP</button></Link>
          </form>
      </>
    )
  }
}

export default SignUp
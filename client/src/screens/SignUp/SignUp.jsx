import React from "React"
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createUser } from "../../services/users"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        firstname: '',
        lastname: '',
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

    if (created) {
      return <Redirect to={`/users`} />
    }

    return (
      <>
        <h1>Let's Get Started</h1>
          <form className= "signup-form">
            <input
              className="input-first"
              placeholder="Full Name"
              name="firstname"
              onChange={this.handleChange}
            />
            <input
              className="input-last"
              placeholder="Last Name"
              name="lastname"
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
            <button type= 'submit' className= "signup-button">Sign Up</button>
            {/* "Have an account?" link */}
          </form>
      </>
    )
  }
}

export default SignUp
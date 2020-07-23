import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { createUser } from "../../Services/users"
import './SignUp.css'
import StarField from '../../components/StarAnimation/StarAnimation'

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
      <div className="second-moon"></div>
      <StarField />
        <form className="signup-form">
          <h1 className="started">LET'S GET STARTED</h1>
            <input
              className="input-first"
              placeholder="First Name"
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
          <Link to='/'><button type='submit' className="signup-button">SIGN UP</button></Link>
          <Link class='have-an-account' to='/users/sign-in-user'>Have an account?</Link>
          </form>
      </>
    )
  }
}

export default SignUp
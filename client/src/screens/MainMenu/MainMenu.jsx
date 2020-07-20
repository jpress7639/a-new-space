
import React, { Component } from 'react'
import {getUser} from '../../Services/users.js'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const user = await getUser(id)
    this.setState({user})
  }

  render() {
    const { firstName } = this.state.user
    const {lastName} = this.state.user
    return (
      <div>
        <p>Welcome {firstName} {lastName}, let's take you to your space! </p>
        </div>
    )}
}
export default MainMenu
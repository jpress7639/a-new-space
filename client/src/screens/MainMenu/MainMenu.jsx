
import React, { Component } from 'react'
import {getUser} from '../../Services/users.js'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: []
    }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const user = await getUser(id)
    this.setState({user})
  }
  render () {
    return (
      <div>
        <p>This is the main menu</p>
        </div>
    )}
}
export default MainMenu
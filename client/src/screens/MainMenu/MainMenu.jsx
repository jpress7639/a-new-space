import React, { Component } from 'react'
import { getUser } from '../../Services/users.js'
import SongLayout from '../../components/shared/SongPlaylistLayout/SongLayout.jsx'
import Layout from "../../components/shared/Layout/Layout"
import './MainMenu.css'

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
    this.setState({ user })
  }

  render() {
    const { firstName, lastName } = this.state.user
    return (
      <div className='main-menu-container'>
        <Layout id={this.state.user._id}>
          <p>Welcome {firstName} {lastName}, let's take you to your space! </p>
        <SongLayout />
        </Layout>
      </div>
    )}
}
export default MainMenu
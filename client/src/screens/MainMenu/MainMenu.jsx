import React, { Component } from 'react'
import { getUser } from '../../Services/users.js'
import SongLayout from '../../SongPlaylist/SongLayout.jsx'
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
    console.log(SongLayout)
  }

  render() {
    const { firstName } = this.state.user
    const {lastName} = this.state.user
    return (
      <div className='main-menu-container'>
      <Layout id={this.state.user._id}>
      <div className="welcome">
        <h3>Welcome {firstName}, <br></br> let's take you to your <span className="emphasis">space!</span> </h3>
        </div>
        </Layout>
      </div>
    )}
}
export default MainMenu
import React, { Component } from 'react'
import { getUser, deleteUser } from "../../Services/users"
import { Link, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import './AccountDetail.css'

class AccountDetail extends Component {
    constructor(props) {
        super(props)
      this.state = {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          imgURL: '',
        },
        deleted: false
      }
    }

  async componentDidMount() {
      let { id } = this.props.match.params
      const user = await getUser(id)
      this.setState({user})
  }
  
  handleClick() {
    const { user } = this.state
    deleteUser(user._id)
    this.setState({
      deleted: true
    })
  }

  render() {
    const { user, deleted } = this.state
      if (deleted) {
        return <Redirect to={`/`}/>
      }
      return (
      <div>
        <Layout id={user._id}>
          <div className="user-profile">
            <img src={user.imgURL} alt={user.firstName}></img>
              <h2>{user.firstName} {user.lastName}<br></br>{user.email}</h2> 
              </div> 
          <div className="route-buttons">
            <button><Link to={`/users/${user._id}/edit`}>Update My Account</Link></button>
            <button onClick={() => this.handleClick()}>Delete My Account</button>
          </div>
        </Layout>
      </div>
    )
  }
}

export default AccountDetail
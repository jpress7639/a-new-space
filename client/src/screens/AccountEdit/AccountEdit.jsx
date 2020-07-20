import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getUser, updateUser } from '../../Services/users'
import Layout from '../../components/shared/Layout/Layout'

class AccountEdit extends Component {
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
            updated: false
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const user = await getUser(id)
        this.setState({ user })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = this.props.match.params
        const updated = await updateUser(id, this.state.user)
        this.setState({ updated })
    }

    render() {
        const { user, updated } = this.state
        if (updated) {
            return <Redirect to={`/users/${user._id}/detail`} />
        }
        return (
          <div>
            <Layout id={user._id}>
              <h3>{user.firstName} {user.lastName}</h3>
                <img src={user.imgURL} alt={user.firstName}></img>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" value={user.firstName} name="firstName" required onChange={this.handleChange}></input>
                    <input placeholder="Last Name" value={user.lastName} name="lastName" required onChange={this.handleChange}></input>
                    <input placeholder="New Email" value={user.email} name="email" required onChange={this.handleChange}></input>
                    <input placeholder="New Password" value={user.password} name="password" required onChange={this.handleChange}></input>
                    <input placeholder="Image Link" value={user.imgURL} name="imgURL" required onChange={this.handleChange}></input>
                    <button type="submit">Save My Account</button>
                </form>
            </Layout>
          </div>
        )
    }
}

export default AccountEdit
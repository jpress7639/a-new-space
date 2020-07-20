import React, { Component } from 'react'
import { getUser, deleteUser } from "../../Services/users"
import { Link, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'

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
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const user = await getUser(id)
        this.setState({user})
    }

    render() {
        const { user } = this.state
        if (deleteUser()) {
            return <Redirect to={`/`}/>
        }
        return (
        <div>
            <Layout>
            <div className="user-profile">
                <img src={user.imgURL}></img>
                <h2>{user.firstName}{user.lastName}</h2>
                <h3>{user.email}</h3>
            </div>
            <div className="route-buttons">
                <button><Link to={`/users/${user._id}/edit`}>Update My Account</Link></button>
                <button onClick={() => deleteUser(user._id)}>Delete My Account</button>
            </div>
            </Layout>
        </div>
        )
    }
}

export default AccountDetail
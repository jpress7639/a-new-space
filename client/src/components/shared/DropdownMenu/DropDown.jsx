import React, { Component } from "react"
import { Link } from "react-router-dom"
import { getUser } from "../../../Services/users"

class DropDown extends Component{
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

    render(){
        const { user } = this.state
        return(
            <>
            <div className="hamburger">
            </div>
            <div className="dropdown-menu">
            <nav>
                <Link to={`users/:id`}><p>Home</p></Link>
                <Link to={`/users/${user._id}/edit`}><p>My Account</p></Link>
                <p>About</p>
                <Link to={'/'}>Sign Out</Link>
            </nav>
            </div>
            </>
        )
    }
}

export default DropDown

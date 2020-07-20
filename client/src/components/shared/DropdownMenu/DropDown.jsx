import React, { Component } from "react"
import { Link } from "react-router-dom"
import { getUser } from "../../../Services/users"
import './DropDown.css'

class DropDown extends Component{
    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
    }

    async componentDidMount() {
      let {id} = this.props
      const user = await getUser(id)
      this.setState({ user })
    }

    render(){
        const { user } = this.state
        return(
            <div className="dropdown">
            <div className="hamburger">
            </div>
            <div className="dropdown-menu">
            <nav>
                <h4><Link to={`users/${user._id}`} style={{textDecoration: `none`, color: `white`}}>HOME</Link></h4>
                <h4><Link to={`/users/${user._id}/edit`} style={{textDecoration: `none`, color: `white`}}>MY ACCOUNT</Link></h4>
                <h4><Link to={'/'} style={{textDecoration: `none`, color: `white`}}>SIGN OUT</Link></h4>
            </nav>
            </div>
            </div>
        )
    }
}

export default DropDown

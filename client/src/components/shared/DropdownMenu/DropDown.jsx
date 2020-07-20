import React, { Component } from "react"
import { Link } from "react-router-dom"
import './DropDown.css'


class DropDown extends Component{
    constructor(props) {
        super()
    }

  
    render(){
      const { id } = this.props
        return(
            <div className="dropdown">
            <div className="hamburger">
            </div>
            <div className="dropdown-menu">
            <nav>
                <h4><Link to={`/users/${id}`} style={{textDecoration: `none`, color: `white`}}>HOME</Link></h4>
                <h4><Link to={`/users/${id}/detail`} style={{textDecoration: `none`, color: `white`}}>MY ACCOUNT</Link></h4>
                <h4><Link to={'/users/sign-in-user'} style={{textDecoration: `none`, color: `white`}}>SIGN OUT</Link></h4>
            </nav>
            </div>
            </div>
        )
    }
}

export default DropDown

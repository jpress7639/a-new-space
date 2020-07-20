import React, { Component } from "react"
import { Link } from "react-router-dom"

class DropDown extends Component{
    constructor(props) {
        super()
    }

  
    render(){
      const { id } = this.props
        return(
          <>
            <div className="hamburger">
            </div>
            <div className="dropdown-menu">
              <nav>
                <Link to={`/users/${id}`}><p>Home</p></Link>
                <Link to={`/users/${id}/detail`}><p>My Account</p></Link>
                <p>About</p>
                <Link to={'/users/sign-in-user'}>Sign Out</Link>
              </nav>
            </div>
          </>
        )
    }
}

export default DropDown

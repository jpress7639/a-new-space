import React from "react"
import { Link } from "react-router-dom"

class DropDown {
    render(){
        return(
            <>
            <div className="hamburger">
            </div>
            <div className="dropdown-menu">
            <nav>
                <Link to={`/users/${user._id}`}><p>My Account</p></Link>
                <p>About</p>
                <Link to={'/'}>Sign Out</Link>
            </nav>
            </div>
            </>
        )
    }
}

export default DropDown

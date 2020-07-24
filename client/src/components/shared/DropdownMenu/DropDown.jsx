import React, { Component } from "react"
import { Link } from "react-router-dom"
import './DropDown.css'

class DropDown extends Component{
    constructor() {
        super()

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault()
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu)
        })
    }
  
    render(){
      const { id } = this.props
        return(
            <div className="dropdown">
            <div className="hamburger" onClick={this.showMenu}>
                <div className="line">_____</div>
                <div className="line">_____</div>
                <div className="line">_____</div>
            </div>
            {this.state.showMenu ? ( <div className="dropdown-menu" ref={(element) => {
                this.dropdownMenu = element;}}>
                    <nav>
                        <h5><Link to={`/users/${id}`} style={{textDecoration: `none`, color: `white`}}>HOME</Link></h5>
                        <h5><Link to={`/users/${id}/detail`} style={{textDecoration: `none`, color: `white`}}>MY ACCOUNT</Link></h5>
                        <h5><Link to={'/users/sign-in-user'} style={{ textDecoration: `none`, color: `white` }}>SIGN OUT</Link></h5>
                        <h5 ><Link to={'/users/favorites'} style={{textDecoration: `none`, color: `white`}}>FAVORITES</Link></h5>
                    </nav>
                    </div>
                ): 
                (null)}
            </div>
        );
    }
}

export default DropDown

import React from "react"
import DropDown from "../DropdownMenu/DropDown"
import StarField from '../../StarAnimation/StarAnimation'

const Layout = (props) => (
    <div className="layout">
        <StarField />
        <div className="sidebar">
          <DropDown id={props.id}/>
        </div>
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout
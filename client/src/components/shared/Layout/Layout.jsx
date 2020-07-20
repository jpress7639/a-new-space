import React from "react"
import DropDown from "../DropdownMenu/DropDown"

const Layout = (props) => (
    <div className="layout">
        <div className="sidebar">
      <DropDown id={props.id}/>
        </div>
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout
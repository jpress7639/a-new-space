import React, { Component } from "react"
import StarfieldAnimation from 'react-starfield-animation'

//adapted from https://github.com/transitive-bullshit/react-starfield-animation

class StarField extends Component {
    render() {
        return(
            <StarfieldAnimation style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: '-100'
            }}/>
        )
    }
}

export default StarField
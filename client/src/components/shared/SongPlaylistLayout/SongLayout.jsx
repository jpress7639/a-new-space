import React, { Component } from "react"
import playlist from "../../../playlist/playlist.json"
import "./SongLayout.css"
// import {Link} from 'react-router-dom'

class SongLayout extends Component {

  render() {
    return (
      <>
        <div className="playlist-menu">
        <h1 className='playlist-title'>SPACE TANK</h1>
          <input className='playlist-search-bar' placeholder='Search'></input>
              {playlist.map(station => 
              <div className='station-container'>
                <h3>{station.genre} Station</h3>
              </div>
              )}
        </div>
        </>
        )
    }
}

export default SongLayout
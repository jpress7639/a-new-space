import React, { Component } from "react"
import playlist from "../../../playlist/playlist.json"
import "./SongLayout.css"
// import {Link} from 'react-router-dom'

class SongLayout extends Component {

  render() {
    const genre = [...new Set(playlist.map(genre => genre.genre))]
    console.log(genre)
    return (
      <>
        <div className="playlist-menu">
        <h1 className='playlist-title'>SPACE TANK</h1>
          <input className='playlist-search-bar' placeholder='Search'></input>
              {genre.map(station => 
              <div className='station-container'>
                <h3>{station} Station</h3>
              </div>
              )}
        </div>
        </>
        )
    }
}

export default SongLayout
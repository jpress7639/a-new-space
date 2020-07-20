import React, { Component } from "react"
import playlist from "../../../playlist/playlist.json"
import "./SongLayout.css"

class SongLayout extends Component {

  render() {
      
        return(
            <>
            <div className="playlist-menu">
            <img src={playlist[0].imgURL} alt="playlist-cover"></img>
            </div>
              <div className="song">
              <h2>Artist: {playlist[0].artist}</h2>
              <h3>Song: {playlist[0].song}</h3>
            </div>
            </>
        )
    }
}

export default SongLayout
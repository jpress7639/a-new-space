import React, { Component } from "react";
import playlist from "../../../playlist/playlist.json";
import "./SongLayout.css";
// import {Link} from 'react-router-dom'

class SongLayout extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      queriedRadioSearch: [],
    };
  }
  //update initial values with full playlist
  async componentDidMount() {
    const totalPlaylist = playlist;
    this.setState({
      playlist: totalPlaylist,
      queriedRadioSearch: totalPlaylist,
    });
  }
  //update the queriedRadioSearch with entered values of search bar
  handleSearch = (event) => {
    const queriedRadioSearch = playlist.filter((radio) =>
      radio.genre.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ queriedRadioSearch });
  };

  render() {
    const genre = [
      ...new Set(this.state.queriedRadioSearch.map((genre) => genre.genre)),
    ];
    console.log(genre);
    return (
      <>
        <div className="playlist-menu">
          <h1 className="playlist-title">SPACE TANK</h1>
          <input
            className="playlist-search-bar"
            onChange={this.handleSearch}
            placeholder="Search"
          ></input>
          {genre.map((station) => (
            <div className="station-container">
              <h3>{station} Station</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SongLayout;

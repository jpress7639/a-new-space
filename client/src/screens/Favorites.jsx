import React, { Component } from "react";
import playlist from "../playlist/playlist.json";
import "../components/shared/SongPlaylistLayout/SongLayout.css";
import { Link } from "react-router-dom";

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
    //grab the data for favoriteMe and radioStation from local storage
    const stations = localStorage.getItem("stationArray") ? JSON.parse(localStorage.getItem("stationArray")) : this.state.playlist;
    const totalPlaylist = playlist;
    this.setState({
      playlist: stations,
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
    const { id } = this.props;
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
              <Link to={`/users/${id}/${station}`}>
                <h3>{station} Station</h3>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SongLayout;
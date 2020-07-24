import React, { Component } from "react";
import playlist from "../../playlist/playlist.json";
import "../../components/shared/SongPlaylistLayout/SongLayout.css";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout"

class FavoritesLayout extends Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      queriedRadioSearch: [],
    };
  }

  //update initial values with the info from local storage called 'stationArray'
  componentDidMount() {
    //grab the data for stations variable from local storage
    const stations = localStorage.getItem("stationArray")
      ? JSON.parse(localStorage.getItem("stationArray"))
      : this.state.playlist;
    console.log(stations);
    this.setState({
      playlist: stations,
      queriedRadioSearch: stations,
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
    const { id } = this.props.match.params;
    const genre = [...new Set(this.state.queriedRadioSearch)];
    return (
      <>
      <Layout id={id}>
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
        </Layout>
      </>
    );
  }
}

export default FavoritesLayout;

import React, { Component } from "react";
import playlist from "../../playlist/playlist.json";

const next = 1;
const prev = -1;
export default class RadioScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      radioStation: "",
      listOfSongs: [],
      artist: "",
      song: "",
      index: 0,
      favoriteMe: false,
      testArray: [],
    };
  }

  async componentDidMount() {
    const chosenGenre = await this.props.match.params.genre;
    const filteredList = await new Array(
      playlist.filter((station) => station.genre === chosenGenre)
    );
    this.setState({
      radioStation: chosenGenre,
      listOfSongs: filteredList[0],
      artist: filteredList[0][0].artist,
      song: filteredList[0][0].song,
    });
  }
  //updates whether the favorites box has been checked or not
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : false;

    this.setState({ favoriteMe: value });
  };
  //when user clicks submit it adds the station to local storage array called stationArray
  handleFormSubmit = () => {
    const { radioStation, favoriteMe } = this.state;
    localStorage.setItem("favoriteMe", favoriteMe);
    //retrieve student array or create one if there isnt' any info saved yet
    const stations = localStorage.getItem("stationArray") ? JSON.parse(localStorage.getItem("stationArray")) : [];
    //push current station to stations array
    stations.push(favoriteMe ? radioStation : "");
    //add stations array to local storage updating the stationArray
    localStorage.setItem("stationArray", JSON.stringify(stations));
  };

  nextSong = (n, next) => {
    const { index } = this.state;
    if (this.state.index < this.state.listOfSongs.length - 1) {
      this.setState({
        index: n + next,
      });
      this.setState({
        artist: this.state.listOfSongs[index + 1].artist,
        song: this.state.listOfSongs[index + 1].song,
      });
    } else {
      this.setState({
        artist: this.state.listOfSongs[0].artist,
        song: this.state.listOfSongs[0].song,
        index: 0,
      });
    }
  };

  prevSong = (n, prev) => {
    let { index } = this.state;
    let { listOfSongs } = this.state;

    if (this.state.index > 0) {
      this.setState({
        index: n + prev,
      });
      this.setState({
        artist: listOfSongs[index - 1].artist,
        song: listOfSongs[index - 1].song,
      });
    } else {
      this.setState({
        artist: this.state.listOfSongs[listOfSongs.length - 1].artist,
        song: this.state.listOfSongs[listOfSongs.length - 1].song,
        index: listOfSongs.length - 1,
      });
    }
  };

  render() {
    let { index } = this.state;

    return (
      <div>
        <div>
          <h1>{this.state.radioStation}</h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input
                name="favoriteMe"
                checked={this.state.favoriteMe}
                onChange={this.handleChange}
                type="checkbox"
              />{" "}
              Favorite me
            </label>
            <button type="submit">Click to Add</button>
          </form>
          <h2>{this.state.song} </h2>
        </div>

        <button
          onClick={() => {
            this.prevSong(index, prev);
          }}
        >
          {"<"}
        </button>

        <button
          onClick={() => {
            this.nextSong(index, next);
          }}
        >
          {">"}
        </button>
      </div>
    );
  }
}

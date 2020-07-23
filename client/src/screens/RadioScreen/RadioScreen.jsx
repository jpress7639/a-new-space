import React, { Component } from 'react'
import './RadioScreen.css'
import playlist from "../../playlist/playlist.json"
import {Link} from 'react-router-dom'
import DropDown from '../../components/shared/DropdownMenu/DropDown'

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
      gif: ''
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
      gif: filteredList[0][0].gif
    })
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
    const { index } = this.state
    let { listOfSongs } = this.state
    
    if (this.state.index < listOfSongs.length - 1) {
      this.setState({
        index: n + next,
      });
      this.setState({
        artist: listOfSongs[index + 1].artist,
        song: listOfSongs[index + 1].song
      })
    } else {
      this.setState({
        artist: listOfSongs[0].artist,
        song: listOfSongs[0].song,
        index: 0
      })
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
        artist: listOfSongs[listOfSongs.length - 1].artist,
        song: listOfSongs[listOfSongs.length - 1].song,
        index: listOfSongs.length - 1
      })
    }
  };

  render() {
    let { index } = this.state
    return (
      <body className={this.state.radioStation}>
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
        <DropDown/>
        <div className='radio-container'>

          <Link to={`/users/${this.props.match.params.id}`}>
            <div className='radio-title-container'>
              <h1>SPACE TANK</h1>
            </div>
          </Link>
          
          <div className='radio-station-container'>
            <h1 onClick={(() => {
              this.prevSong(index, prev) 
              })}>{'<'}
            </h1>
            <h1>{this.state.radioStation} Station</h1>
            <h1 onClick={(() => {
              this.nextSong(index, next) 
              })}>{'>'}
            </h1>
          </div>

        </div>

        <div className='radio-song-container'>
          <h2>"{this.state.song}" by {this.state.artist} </h2>
        </div> 

      </body>
    );
  }
}

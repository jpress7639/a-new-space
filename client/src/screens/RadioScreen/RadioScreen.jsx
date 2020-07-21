import React, { Component } from 'react'
import playlist from "../../playlist/playlist.json"

export default class RadioScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      radioStation: '',
      listOfSongs: [],
      artist: '',
      song: '',
      index: 0
    }
  }

  async componentDidMount() {
    const chosenGenre = await this.props.match.params.genre
    const filteredList = await new Array(playlist.filter(station => station.genre === chosenGenre))
    this.setState({
      radioStation: chosenGenre,
      listOfSongs: filteredList[0]
    })
  }

  nextSong = (n) => {

    if (this.state.index < this.state.listOfSongs.length) {
      this.setState({
        index: (n + 1)
      })
      this.setState({
        artist: this.state.listOfSongs[this.state.index].artist,
        song: this.state.listOfSongs[this.state.index].song
      })
    } else {
      this.setState({
        artist: this.state.listOfSongs[0].artist,
        song: this.state.listOfSongs[0].song,
        index: 0
      })
    }
  }

  render() {
    // console.log(this.state.listOfSongs.forEach(str => console.log(str[0].artist)))
    let {index} = this.state
    return (
          <div>
        <h1>{this.state.radioStation}</h1>
        <h2>{this.state.artist}</h2>
        <button onClick={(() => {
          this.nextSong(index) 
        })}>
        </button>
        </div>
      )
  }
}
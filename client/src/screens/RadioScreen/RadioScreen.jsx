import React, { Component } from 'react'
import playlist from "../../playlist/playlist.json"

const next = 1
const prev = -1
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
      listOfSongs: filteredList[0],
      artist: filteredList[0][0].artist,
      song: filteredList[0][0].song
    })
  }

  nextSong = (n, next) => {
    const {index} = this.state
    if (this.state.index < this.state.listOfSongs.length - 1) {
      this.setState({
        index: (n + next)
      })
      this.setState({
        artist: this.state.listOfSongs[index + 1].artist,
        song: this.state.listOfSongs[index + 1].song
      })
    } else {
      this.setState({
        artist: this.state.listOfSongs[0].artist,
        song: this.state.listOfSongs[0].song,
        index: 0
      })
    }
  }

  prevSong = (n, prev) => {
    let { index } = this.state
    let {listOfSongs} = this.state

    if (this.state.index > 0) {
      this.setState({
        index: (n + prev)
      })
      this.setState({
        artist: listOfSongs[index - 1].artist,
        song: listOfSongs[index - 1].song
      })

    } else {
      this.setState({
        artist: this.state.listOfSongs[listOfSongs.length - 1].artist,
        song: this.state.listOfSongs[listOfSongs.length - 1].song,
        index: listOfSongs.length - 1
      })
    }
  }

  render() {
    let { index } = this.state

    return (
          <div>
            <h1>{this.state.radioStation}</h1>
            <h2>{this.state.song} </h2>

            <button onClick={(() => {
              this.prevSong(index, prev) 
              })}>{'<'}
            </button>

            <button onClick={(() => {
              this.nextSong(index, next) 
              })}>{'>'}
            </button>
          </div>
      )
  }
}
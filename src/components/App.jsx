import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SongTable from './SongTable/SongTable';
import AddSongForm from './AddSongForm/AddSongForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHeads: [
        'Genre', 'Artist', 'Song Title',
        'Album', 'Release Date', 'Likes',
        'Dislikes','Edit', 'Delete Song'
      ],
      songs: [],
      showEditModal: false,
      showAddModal: false,
    }
  }

  song = null
  URL = 'http://127.0.0.1:8000/music/'

  showEdit = () => {
    this.setState({ showEditModal: true})
    this.forceUpdate()
  }

  showAdd = () => {
    this.setState({ showAddModal: true})
  }

  hideEdit = () => {
    this.setState({ showEditModal: false})
  }

  hideAdd = () => {
    this.setState({ showAddModal: false})
  }

  componentDidMount() {
    this.getAllSongs()
  }
  
  async getAllSongs(){
    let response = await axios.get(this.URL)
    this.setState({
      songs: response.data
    })
  }

  getSong = (obj) => {
    this.song = obj
    console.log(this.song)
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  deleteSong = (song) => {
    let songURL = `${this.URL}${song.id}/`
    let updatedSongs = this.state.songs
    let songIndex = updatedSongs.indexOf(song)
    updatedSongs.splice(songIndex, 1)
    this.setState({
      songs: updatedSongs
    })
    axios.delete(songURL)
  }

  addSong = (song) => {

    if (this.hasEmptyValues(song)) {
      alert('Please fill out each section on the form.')
    } else {
      let addSongs = this.state.songs
      addSongs.push(song)
      this.setState({
        songs: addSongs
      })
      axios.post(this.URL, song).catch(err => alert(`Invalid Form Entry
    ${err} | Bad Request`))
    }
  }

  // updateSong = (song, updatedSong) => {
  //   if (this.hasEmptyValues(updatedSong)) {
  //     alert('Please fill out each section on the form')
  //   } else {
  //     let songURL = `${this.URL}${song.id}/`
  //     let updatedSongs = this.state.songs
  //     let songIndex = updatedSongs.indexOf(song)
  //     updatedSongs[songIndex] = updatedSong
  //     this.setState({
  //       songs: updatedSongs
  //     })
  //     axios.put(songURL, updatedSong)
  //     .catch(err => alert(`Invalid Form Entry
  //   ${err} | Bad Request`))
  //   }
  // }

  hasEmptyValues = (song) => {
    for (let value in song){
      if (song[value] === ''){
        return true
      } else {
      return false
      }
    }
  }
  
  
  render() { 
    return ( 
      <div className="container-fluid">
        <SongTable songs={this.state.songs} headers={this.state.tableHeads} delete={this.deleteSong} get={this.getSong} show={this.showEdit} />
        <AddSongForm addSong={this.addSong} />
        <EditSong update={this.updateSong} song={this.song} show={this.props.showEditModal} />
      </div>
    );
  }
}
 
export default App;
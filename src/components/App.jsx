import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddSongForm from './AddSongForm/AddSongForm';
import EditSong from './EditSong/EditSong';

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
    }
  }

  URL = 'http://127.0.0.1:8000/music/'

  componentDidMount() {
    this.getAllSongs()
  }

  async getAllSongs(){
    let response = await axios.get(this.URL)
    this.setState({
      songs: response.data
    })
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
    let addSongs = this.state.songs

    if (this.hasEmptyValues(song)) {
      alert('Please fill out each section in the form.')
    } else {
      addSongs.push(song)
      this.setState({
        songs: addSongs
      })
      axios.post(this.URL, song).catch(err => alert(`Invalid Form Entry
    ${err} | Bad Request`))
    }
  }

  editSong = (song_id, song) => {
    let songURL = `${this.URL}${song_id}/`
    let updatedSongs = this.state.songs
    let songIndex = updatedSongs.indexOf(song)
    updatedSongs[songIndex] = song
    this.setState({
      songs: updatedSongs
    })
    axios.put(songURL, song)
    .catch(err => alert(`Invalid Form Entry
${err} | Bad Request`))
  }

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
        <SongTable songs={this.state.songs} headers={this.state.tableHeads} delete={this.deleteSong} edit={this.EditSong}/>
        <AddSongForm addSong={this.addSong} />
        <EditSong editSong={this.editSong} />
      </div>

    );
  }
}
 
export default App;



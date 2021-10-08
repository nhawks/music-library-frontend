import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddSongForm from './AddSongForm/AddSongForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHeads: ['Genre', 'Artist', 'Song Title', 'Album', 'Release Date', 'Likes', 'Dislikes', 'Delete Song'],
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

  deleteSong = (song_id) => {
    let songURL = `${this.URL}${song_id}/`
    axios.delete(`${songURL}`)
    this.refreshPage()
  }

  addSong = (song) => {
    let addSongs = this.state.songs
    addSongs.push(song)
    this.setState({
      songs: addSongs
    })
    axios.post(this.URL, song)
    .catch(err => alert(`Invalid Form Entry
${err} | Bad Request`))
  }
  
  
  render() { 
    return ( 
      <div className="container-fluid">
        <SongTable songs={this.state.songs} headers={this.state.tableHeads} delete={this.deleteSong}/>
        <AddSongForm addSong={this.addSong} />
      </div>

    );
  }
}
 
export default App;



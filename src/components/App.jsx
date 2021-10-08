import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddSong from './AddSong/AddSong';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHeads: ['Genre', 'Artist', 'Song Title', 'Album', 'Release Date', 'Likes', 'Dislikes', 'Delete Song'],
      songs: [],
    }


  }

  componentDidMount() {
    this.getAllSongs()
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    this.setState({
      songs: response.data
    })
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  deleteSong = (song_id) => {
    let songURL = `http://127.0.0.1:8000/music/${song_id}/`
    axios.delete(`${songURL}`)
    this.refreshPage()
  }

  
  
  render() { 
    return ( 
      <div className="container-fluid">
        <SongTable songs={this.state.songs} headers={this.state.tableHeads} delete={this.deleteSong}/>
        <AddSong />
      </div>

    );
  }
}
 
export default App;



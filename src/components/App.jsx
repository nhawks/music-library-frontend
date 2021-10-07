import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';

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
    this.deleteSong()
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    this.setState({
      songs: response.data
    })
  }

  async deleteSong(){
    let response = await axios.delete(`http://127.0.0.1:8000/music/`)
  }
  
  render() { 
    return ( 
      <div className="container-fluid">
        <SongTable songs={this.state.songs} headers={this.state.tableHeads} delete={this.deleteSong()}/>
      </div>

    );
  }
}
 
export default App;



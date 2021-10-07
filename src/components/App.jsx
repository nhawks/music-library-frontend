import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHeads: ['Genre', 'Artist', 'Song Title', 'Album', 'Release Date', 'Likes', 'Dislikes'],
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
  
  render() { 
    return ( 
      <div className="container-fluid">
        <SongTable songs={this.state.songs} headers={this.state.tableHeads}/>
      </div>

    );
  }
}
 
export default App;



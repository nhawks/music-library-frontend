import React, { Component } from 'react';
import axios from 'axios';


class AddSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genre: "",
            artist: "",
            title: "",
            album: "",
            release_date: ""
        }
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSong(this.state)

        
    }
    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label> Genre 
                    <input name="genre" onChange={this.handleChange} value={this.state.genre} />
                </label>
                <br />
                <label> Artist 
                    <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                </label>
                <br />
                <label> Song Title 
                    <input name="title" onChange={this.handleChange} value={this.state.title} />
                </label>
                <br />
                <label> Song Album 
                    <input name="album" onChange={this.handleChange} value={this.state.album} />
                </label>
                <br />
                <label> Release Date
                    <input name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                </label>
                <br />
                
                <input type="Submit" value="Add Song" />
            </form>
         );
    }
}
 
export default AddSongForm;
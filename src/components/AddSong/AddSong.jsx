import React, { Component } from 'react';
import axios from 'axios';

class AddSong extends Component {
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
    render() { 
        return ( 
            <form>
                <label> Genre 
                    <input />
                </label>
                <br />
                <label> Artist 
                    <input />
                </label>
                <br />
                <label> Song Title 
                    <input />
                </label>
                <br />
                <label> Album 
                    <input />
                </label>
                <br />
                <label> Release Date 
                    <input />
                </label>
                <br />
                <input type="Submit" value="Add Song" />
            </form>
         );
    }
}
 
export default AddSong;
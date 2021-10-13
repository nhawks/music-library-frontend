import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'



class AddSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genre: "",
            artist: "",
            title: "",
            album: "",
            release_date: "",
            likes: 0,
            dislikes: 0
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
            <div className="container">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span class="material-icons text-primary"> playlist_add </span>
                        <h6 className="text-primary"> Add Song to Library </h6>
                    </Accordion.Header>
                        <Accordion.Body>
                            <form onSubmit={this.handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
                                <div class="row g-3">
                                    <div class="col-md">
                                        <input type="text" class="form-control bg-light text-primary" placeholder="Genre" aria-label="Genre" name="genre" placeholder="Genre" onChange={this.handleChange} value={this.state.genre} />
                                    </div>
                                    <div class="col-md">
                                        <input type="text" class="form-control bg-light text-primary" placeholder="Artist" aria-label="Artist" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                                    </div>
                                    <div class="col-md">
                                        <input type="text" class="form-control bg-light text-primary" placeholder="Song Title" aria-label="Song Title" name="title" onChange={this.handleChange} value={this.state.title}/>
                                    </div>
                                    <div class="col-md">
                                        <input type="text" class="form-control bg-light text-primary" placeholder="Album" aria-label="Album" name="album" onChange={this.handleChange} value={this.state.album}/>
                                    </div>
                                    <div class="col-md">
                                        <input type="date" class="form-control bg-light text-primary" placeholder="Release Date" aria-label="Release Date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                                    </div>
                                </div>
                                    <div className="row g-3">
                                        <button type="submit" className="btn btn-primary">Add Song</button>
                                    </div>
                            </form>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
         );
    }
}
 
export default AddSongForm;
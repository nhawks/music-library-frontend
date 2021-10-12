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
            <div className="container">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Add Song to Library</Accordion.Header>
                        <Accordion.Body>
                            <form onSubmit={this.handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
                                <div class="row g-3">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Genre" aria-label="Genre" name="genre" placeholder="Genre" onChange={this.handleChange} value={this.state.genre} />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Artist" aria-label="Artist" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Song Title" aria-label="Song Title" name="title" onChange={this.handleChange} value={this.state.title}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Album" aria-label="Album" name="album" onChange={this.handleChange} value={this.state.album}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Release Date" aria-label="Release Date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
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



{/* <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Add Song
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
                        <div className="accordion-body">
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
                        </div>
                </div>
            </div> */}
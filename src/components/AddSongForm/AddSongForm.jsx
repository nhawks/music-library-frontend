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
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        <form onSubmit={this.handleSubmit}>
                                <label> Genre 
                                    <input name="genre" onChange={this.handleChange} value={this.state.genre} />
                                </label>
                                <label> Artist 
                                    <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                                </label>
                                <label> Song Title 
                                    <input name="title" onChange={this.handleChange} value={this.state.title} />
                                </label>
                                <label> Song Album 
                                    <input name="album" onChange={this.handleChange} value={this.state.album} />
                                </label>
                                <label> Release Date
                                    <input name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                                </label>
                                <input type="Submit" value="Add Song" />
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
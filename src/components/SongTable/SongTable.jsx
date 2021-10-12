import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'


function SongTable(props) {

    const [searchTerm, setsearchTerm] = useState("");

    return ( 
        <div className="container">
            <input type="text" placeholder="Type Here to Search By : Genre , Artist , Song Title , Album , or Release Date" className="form-control bg-black text-primary text-center p-2"
            onChange = {(event) =>{
                setsearchTerm(event.target.value)
            }}
            />
            <Table className="table table-hover text-center" responsive>
                <thead className="bg-primary">
                <tr>
                    {props.headers.map((header) =>
                        <th>{header}</th>
                    )}
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {props.songs.filter(value => {
                        if (searchTerm === "") {
                            return value
                        } else if(
                            value.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || value.artist.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || value.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || value.album.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                            || value.release_date.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        ){
                            return value
                        }
                    }).map((song) =>(
                        <tr className="table-active" key={song.id}>
                            <td>{song.genre}</td>
                            <td>{song.artist}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td>{song.dislikes}</td>
                            <td>
                                <button className="btn text-primary" onClick={() => props.delete(song)}>
                                    <i class="fas fa-trash-alt fa-lg"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />
        </div>
     );
}


export default SongTable;
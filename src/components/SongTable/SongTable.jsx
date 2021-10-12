import React, { useState } from 'react';


function SongTable(props) {

    const [searchTerm, setsearchTerm] = useState("");

    return ( 
        <div className="container">
            <h2 className='text-dark'>Music Table</h2>
            <input type="text" placeholder="Search By : Genre, Artist, Song Title, Album, or Release Date" className="form-control"
            onChange = {(event) =>{
                setsearchTerm(event.target.value)
            }}
            />
            <table className="table table-dark table-hover">
                <thead>
                <tr>
                    {props.headers.map((header) =>
                        <th>{header}</th>
                    )}
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
                        <tr key={song.id}>
                            <td>{song.genre}</td>
                            <td>{song.artist}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td>{song.dislikes}</td>
                            <button onClick={() => props.delete(song)}>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
        </div>
     );
}


export default SongTable;
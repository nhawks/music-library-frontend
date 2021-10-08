import React from 'react';
import axios from 'axios';

function SongTable(props) {
    return ( 
        <div>
            <h2>Music Table</h2>
            <table>
                <thead>
                <tr>
                    {props.headers.map((header) =>
                        <th>{header}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                    {props.songs.map((song) =>
                        <tr key={song.id}>
                            <td>{song.genre}</td>
                            <td>{song.artist}</td>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td>{song.dislikes}</td>
                            <button onClick={() => props.delete(song.id, song)}>Delete</button>
                        </tr>
                    )}
                </tbody>
            </table>
            <br />
        </div>
     );
}





export default SongTable;
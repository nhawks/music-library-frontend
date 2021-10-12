import React from 'react';
import './TitleBar.css'

function TitleBar(){
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0 }}>
                <div className="titlebar-nav">
                    <h1>
                        <span className="material-icons fa-sm">library_music</span> Music Library 
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default TitleBar
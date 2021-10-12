import React from 'react';
import './TitleBar.css'

function TitleBar(){
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0 }}>
                <div className="titlebar-nav">
                    <h2>
                        <span className="material-icons fa-sm text-primary">library_music</span> Music Library 
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default TitleBar
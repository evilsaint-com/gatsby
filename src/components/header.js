import React, { useState } from "react";


const Header = ({handleChange, searchInput}) => {
    
    console.log(searchInput)

    return (
        <div style={{display: "flex", 
        flexFlow: "row wrap", justifyContent: "space-evenly", margin: 50
        }}>
            <div>
            <input
            className="searchTerm"
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
            </div>
            <div>
                <a href="/" style={{marginRight: 15}}>
                <img
                style={{width: 36}} 
                src="/static/facebook-logo.png"/>
                </a>
                <a href="/" style={{marginRight: 15}}>
                <img
                style={{width: 36}} 
                src="/static/instagram.png"/>
                </a>
                <a href="/" style={{marginRight: 15}}>
                <img
                style={{width: 36}} 
                src="/static/twitter.png"/>
                </a>
                <a href="/" style={{marginRight: 15}}>
                <img
                style={{width: 36}} 
                src="/static/youtube.png"/>
                </a>
            </div>
            <div>
                <img src="/static/ES-Wordmark.png"/>
            </div>
        </div>
    )
}

export default Header;
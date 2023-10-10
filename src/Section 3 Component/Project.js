import "./Project.css";
import React from 'react';
function Project ({name, link, image}){
    return(
        <a className= "project" href={link} target="_blank" rel=" noopener noreferrer">
            <img src={image} style={{width: '100%', height: '100%'}}></img>
        </a>
    );
}

export default Project;
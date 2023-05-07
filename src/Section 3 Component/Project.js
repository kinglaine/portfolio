import "./Project.css";
import React from 'react';
function Project ({name, link, image}){
    return(
        <a className= "project" href={link} target="_blank" rel=" noopener noreferrer" style={{backgroundImage:`url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></a>
    );
}

export default Project;
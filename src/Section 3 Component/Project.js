import "./Project.css"
function Project ({name, link, image}){
    return(
        <div className= "project" style={{backgroundImage:`url(${image})`, 
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className ="dark">
                <section id="slideText">
                    <h2>{name}</h2>
                    <a id="linkToProject" href={link} target="_blank" rel="noreferrer">See Project</a>
                </section>
            </div>
        </div>
    );
}

export default Project;
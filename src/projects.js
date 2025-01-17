import React from "react";
import './projects.css';

export default function Projects(prop) {
    return (
        <div className="project-card">
            
                <div id="image_tag"><img src={prop.my_image} alt="projects_image.jpg" id="project_image"/></div>
                <h3 id="prop_title">{prop.title}</h3>
                <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}><p id="rating">Rating:{prop.views}</p> <p id="see_more" style={{margin:0}}>See More</p></div>
                
            
        </div>
    );
}



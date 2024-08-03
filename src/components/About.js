import React from "react";

function About({image="https://via.placeholder.com/215", about="About", logo="logo"}) {
    return (
       <aside>
            <img src={image} alt={logo} placeholder={image} />
            <p>{about}</p>
       </aside>
    )   
}

export default About;
import React from "react";
import Links from "./Links";

function About(prop) {
  if (prop.bio === "" || prop.bio == null){
    return  (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
        
      </div>
    )
  } else{
      return (
      <div id="about">
        <h2>About Me</h2>
        <p>{prop.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links  github={prop.links.github} linkedin={prop.links.linkedin}/>
        
      </div>
      )
    }
}

export default About;

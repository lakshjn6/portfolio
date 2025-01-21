
import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion";


export default function Content(){
    const [skill, setSkill] = useState("(Jr. Data Scientist)");

    useEffect(() => {
      const texts = ["(Web Developer)", "(Data Scientist)"];
      let index = 0;
  
      const intervalId = setInterval(() => {
        setSkill(texts[index]);
        index = (index + 1) % texts.length;
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);

    
    
      const [scrollPosition, setScrollPosition] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    return(
        
             <div id="my_image">
        <motion.div id="name_div" initial={{x:"-300px"}} animate={{x:0}} transition={{duration:1, ease:"circOut"}} >
        <h1 className="name" style={{
          transform: `translate(${-scrollPosition*2}px, -10%)`,
          transition: "transform 0.2s ease-out",
        }} >Hello!</h1>
        <br></br>
        <h1 className="name" style={{
          transform: `translate(${-scrollPosition*1.5}px, -10%)`,
          transition: "transform 0.2s ease-out",fontFamily:"Alice"
        }} >I'm Lakshay Mittal✦,</h1>
        <br></br>
        <h1 className="name" id="skill" style={{
          transform: `translate(${-scrollPosition*2}px, -10%)`,
          transition: "transform 0.2s ease-out",fontFamily:"Alice"
        }}>{skill}</h1>
    </motion.div>
    <div>
        <button className="button_design" ><a href='https://www.linkedin.com/in/lakshay-mittal-a4ab04311/' target="_blank" rel="noopener noreferrer">Know MORE</a></button>
        <button className="button_design"><a href='\LAKSHAY MITTAL (12).pdf' target="_blank" rel="noopener noreferrer">Resume</a></button>
    </div>
    </div>
        
    )
}
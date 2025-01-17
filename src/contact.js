import React from "react";
import './contact.css'
// import { motion } from "framer-motion";


export default function Contact(){
    
       
          

    return(
        <div id="contactpage">
        <div id="getcontact"><h1 id="getincontact"
        >Get In Contact:</h1></div>
        <div id="boxes"> 
        <div className="box">
                <img src='/icons8-call-50 (1).png' alt="Call Icon" id="call_icon"/>
                <p>+91 8432070008</p>
                <br></br>
                <br></br>
                <img src='\icons8-gmail-48.png' alt="Call Icon" id="call_icon"/>
                <p>lakshayjain0611@gmail.com <br></br>btech10469.23@bitmesra.ac.in</p>
                
                
                </div>

                <div className="box">
                <img src='\icons8-linkedin-48.png' alt="Call Icon" id="call_icon"/>   
                
                <p><a href="https://www.linkedin.com/in/lakshay-mittal-a4ab04311/" id="linkedin" target="_blank" rel="noopener noreferrer" >Linked_IN</a></p>
                
                <br></br>
                <br></br>

                <img src='\icons8-instagram-48.png' alt="Call Icon" id="call_icon"/>  
                <p> <a href="https://www.linkedin.com/in/lakshay-mittal-a4ab04311/" id="linkedin"  target="_blank"  rel="noopener noreferrer">Instagram</a></p>
                
                </div>
                
                
            </div>
            <img src='\linz-transparent-layers-gradient-landmarks-skyline_145772-619.avif' alt="design Icon" id="design_icon"/>
        </div>
    )
}
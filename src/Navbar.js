import React from "react";
import { motion } from "framer-motion";

export default function Navbar(){
    return(
        
          <div id="nav_bar">
            <div id="firm_name">Protfolio</div>
            <motion.div id="feature_navbar" initial={{ y: "-10vw" }}
                animate={{ y: 0 }}       
                transition={{ duration: 1, ease: "easeIn" }}>
            <div className="A1" onClick={()=>window.scrollTo({ top:0 , behavior:"smooth"})} >HOME</div >
            <div className="A1"  onClick={()=>window.scrollTo({ top:550 , behavior:"smooth"})}>SKILLS</div>
            <div className="A1" onClick={()=>window.scrollTo({ top:1100 , behavior:"smooth"})}>PROJECTS</div>
            <div className="A1" onClick={()=>window.scrollTo({ top:1650+550 , behavior:"smooth"})}>CONTACT</div>

        </motion.div>
        
    </div>
       
    )
}



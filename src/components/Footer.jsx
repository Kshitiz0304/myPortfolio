import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material";

function Footer(){

    return(
        <div>
            <h3 style={{fontSize:'xx-large',fontFamily:'Spectral',textAlign:'center',marginBottom:0}}>Kshitiz Agarwal</h3>
            <p style={{textAlign:'center',marginTop:0}}>
                <a style={{color:'rgb(83,79,79)',textAlign:'center'}} href="mailto:kagarwa3@simon.rochester.edu">kagarwa3@simon.rochester.edu</a>
                <br/><br/>
                ©️ Kshitiz Agarwal, 2024
            </p>
        
            <div style={{marginTop:10,marginBottom:50,display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <a style={{textDecoration:'none',color:'black'}} href="https://www.linkedin.com/in/kshitiz13"><LinkedIn/></a> 
                <a style={{textDecoration:'none',margin:5,color:'black',marginTop:0}} href="https://www.github.com/Kshitiz0304"><GitHub/></a>
            </div>
        </div>
    );
}
export default Footer;
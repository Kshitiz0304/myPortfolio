import React from "react";

function Header(){

    return(
        <div>
            <div style={{paddingTop:10,paddingBottom:10,paddingRight:10,marginTop:50,marginBottom:50}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <h3 className="nameKA"><a href="/" style={{textDecoration:'none',color:'rgb(83,79,79)'}}>Kshitiz Agarwal</a></h3>
                    <span style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <a type="button" className="pBtn" style={{display:'flex',flexDirection:'column',justifyContent:'center'}} href="/">Portfolio</a>
                        <a type="button" className="cBtn" style={{display:'flex',flexDirection:'column',justifyContent:'center'}} href="/contact">Contact</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Header;
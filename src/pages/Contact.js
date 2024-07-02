import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Container } from "@mui/material";


function Contact(){
    return(
    <div>
        <React.Fragment>
            <Container>
                <Header/>
                <div style={{textAlign:'center',marginBottom:100}}>
                    <h2 style={{fontFamily:'Spectral',color:"rgb(79,81,81)",fontSize:'xx-large'}}>Contact Me</h2>
                    <p style={{fontFamily:'Karla',color:"rgb(79,81,81)",fontSize:'x-large'}}>Thank you for visiting my portfolio! I am passionate about using data-driven insights to drive marketing strategies and enhance business performance.</p>
                    <a style={{fontFamily:'Karla',fontSize:'x-large',color:"rgb(79,81,81)"}} href="tel:+19192827267">919.282.7267</a>
                </div>
                <Footer/>
            </Container>
        </React.Fragment>
    </div>
    )
}

export default Contact;
import React from "react";
import Header from "../components/Header";
import { Avatar, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

import Kimg from '../assets/kshitiz.jpg';
import Aveda from '../assets/Ayurveda.png';
import Swiggy from '../assets/swiggy.jpg';
import Tokyo from '../assets/tokyo.jpg';
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <React.Fragment>
      <Container>
        <div>
          <Header/>
        </div>
        <div style={{marginTop:100}}>
        <Grid container spacing={10}>
          <Grid item md={6}>
            <h3 style={{fontFamily:"Karla",fontSize:'xxx-large',marginTop:0}}>About Me</h3>
            <Typography style={{textAlign:'justify',fontFamily:"Karla",fontSize:'large'}}>
              As a detail-oriented and results-driven professional with over 3 years of experience in Marketing & Sales Analysis, Financial Consulting, Consumer Analytics, and Relationship Building, I bring a wealth of expertise to the table. My skill set includes proficiency in A/B Testing, Python scripting, Ad Hoc Analysis, and Digital Marketing. I leverage data-driven insights to inform strategic decisions, optimize marketing campaigns, and drive business growth. Currently pursuing a Master's in Marketing Analytics, I am passionate about delivering measurable results and am seeking a role as a Marketing Analyst to contribute to and grow within a dynamic organization.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Avatar src={Kimg} sx={{ width: 400, height: 470 }} variant='rounded'/>
          </Grid>
        </Grid>
        </div>

        <div style={{marginTop:'20%'}}>
          <Grid container spacing={4}>
            {[
              {
                title:"AyurGPT",
                description:"Large Language Model (LLM) chatbot utilizing the ChatGPT API to provide personalized Ayurvedic healthcare recommendations.",
                img:Aveda
              },
              {
                title:"Tweet Analysis", 
                description:"Analyzed Swiggy tweets to uncover customer satisfaction insights, identify issues, and suggest service optimization.",
                img:Swiggy,
              },
              {
                title:"Tokyo Olympics 2020",
                description:"Analyzed and visualized Kaggle dataset on the Tokyo Olympics 2020.",
                img:Tokyo,
              }
            ].map((it=>(

              <Grid item md={4}>
                <Card elevation={0} style={{borderRadius:0,background:'transparent',marginLeft:0}}>
                  <CardMedia image={it.img} sx={{ height: 300 }}/>
                  <CardContent style={{paddingLeft:0}}>
                    <h3 style={{fontSize:'xx-large',lineHeight:1}}>{it.title}</h3>
                    <p style={{fontFamily:'Karla',color:"rgb(83,79,79)"}}>
                      {it.description}
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            )))}

          </Grid>
        </div>

        <div style={{marginTop:'20%'}}>
          <Footer/>
        </div>
      </Container>
      </React.Fragment>
    </div>
  );
}

export default App;

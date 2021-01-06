import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";
import history from '../history';


export default class BottomNav extends Component {


  cartPage(){
    history.push("/Cart");    
  }

  homePage(){
    history.push("/Home");   

  }



  render() {


    return (
      <div>
        <BottomNavigation class="footerstyle">
          <div class="row col-sm-12">

            <div class="col-sm-6 pt-4">
              <div class="float-right">
                <Button variant="contained" color="primary" onClick = {() => this.cartPage()}>
                  Cart
                </Button>
              </div>

              <div class="float-right mr-2">
                <Button variant="contained" color="primary" onClick = {() => this.homePage()}>
                  Home
                </Button>
              </div>
            </div>

            <div class="col-sm-6 pt-4 ml-2" >
              <div
                class="float-right mb-3 ml-5"
                style={{ width: "200px", paddingBottom: "10px" }}
              >
                <h6
                  style={{
                    color: "#E0A329",
                    fontSize: "20px",
                  }}
                >
                  STAY CONNECTED
                </h6>
                <FacebookIcon /> <InstagramIcon /> <LinkedInIcon />{" "}
                <TwitterIcon /> <YouTubeIcon />
              </div>
            </div>
          </div>
        </BottomNavigation>
      </div>
    );
  }
}

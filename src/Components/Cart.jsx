import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "./StarRating";
import history from "../history";
import BottomNav from './BottomNav';


export default class Home extends Component {
  render() {
    return (
        <div>

      <div class="container">
        <div className="GridRoot">
          <div class="container">
            <div class="row col-md-12 ml-0 pt-5">{this.createCards()}</div>
          </div>
        </div>
      </div>
      <BottomNav/>
                  
      </div>
    );
  }

  //********************************************//

  createCards() {
    //taking dummy list
    var getList =  localStorage.getItem("cartItems");
    var list = JSON.parse(getList);
    //create html
    var cards = [];

    for (let i = 0; i < list.length; i++) {
      cards.push(
        <div class="col-md-4 cardstyle">
          <div class="cardBody mt-3">
            <Card className="CardRoot">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Dresses"
                  height="140"
                  image={list[i].imageURL}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {list[i].name}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {list[i].category}
                  </Typography>

                  <Typography variant="h6" color="textSecondary" component="p">
                    Price : ${list[i].price}
                  </Typography>

                  <div style={{ color: "#888888" }}>
                    <VisibilityOutlinedIcon />
                  </div>
                </CardContent>
                <div class="ml-1">
                  <StarRating id={list[i].id} />
                </div>
              </CardActionArea>
            </Card>
          </div>
        </div>
      );
    }
    return cards;
  }

 
}

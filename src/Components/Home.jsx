import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "./StarRating";
import history from '../history';
import BottomNav from './BottomNav';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      
  render() {

    const { error, isLoaded, items } = this.state;
if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Loading...</div>;
} else {
  

    return (

      <div>
      
      <div class="container">

        <div className="GridRoot">
         
<div class="container">
    
<div class="row col-md-12 ml-0 pt-5">

 {this.createCards()}
 </div>
 </div> 

</div>


        <div class="d-flex justify-content-center p-5">
          <nav>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <BottomNav/>
      </div>
    );
}
    
  }

//********************************************// 



createCards() {
    //taking dummy list
    var list = this.state.items;    
    //create html
    var cards = [];
   
    for (let i = 0; i < list.length; i++) {
            
       cards.push(

<div class="col-md-4 cardstyle">
<div class= "cardBody mt-3">
             <Card className= "CardRoot" >

            <CardActionArea>

              <CardMedia
                component="img"
                alt="Dresses"
                height="140"
                image= {list[i].imageURL}
              />

              <CardContent>
                
                <Typography gutterBottom variant="h5" component="h2">
                {list[i].name}  
                </Typography>

                <Typography variant="body1" color="textSecondary" component="p">
                {list[i].category}
                </Typography>

                <Typography variant="h6" color="textSecondary" component="p">
                Price : ${list[i].price}
                </Typography>  
              </CardContent>    
              <div class = "ml-1">
                  <StarRating id={list[i].id}/>
                </div>
              <CardActions>         
              </CardActions>
              <div>
              <button type="button" class="btn btn-outline-primary" style = {{width : "100%"}}  onClick={() => this.addClick(list[i])} >Add</button>
                </div>
            </CardActionArea>
            </Card>
      
      </div>
      </div>
            );
        
    }
    return cards;
}


componentDidMount() { 
this.getCategories();
 }

  addClick = (item) =>{

    
     console.log(item);
    var _cart = [];

   var stringExisting =  localStorage.getItem("cartItems");
   var existing= JSON.parse(stringExisting);
   if(existing && existing.length>0)
   {
    _cart = existing;
   }

    _cart.push(item);

    localStorage.setItem("cartItems", JSON.stringify(_cart));

    
}


cartPage(){
  history.push('/Cart')    
}


getCategories(){
    
    
    var category = "";
    var age = localStorage.getItem("age");
    if( parseInt(age) < 18){
        //category = "kid’s-fashion";
        category = "kid%27s-fashion";
        
    }
    else if((localStorage.getItem("age")>=18) && (localStorage.getItem("gender")== "male")){
        //category = "men’s-fashion";
        category = "men%27s-fashion";

    }
    else if((localStorage.getItem("age")>=18) && (localStorage.getItem("gender")=="female")){
        //category = "women’s-fashion";
        category = "women%27s-fashion";

    }
//var promise =  Promise((reso, reject) => {
    fetch(
        `https://asia-south1-adon-interviews.cloudfunctions.net/getProductByCategory?category=kid%27s-fashion`,
        {
        method: "GET",
        }
    )
        .then((res) => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.data
              });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );

}
}


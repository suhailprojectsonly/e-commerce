import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import Icon from "@material-ui/core/Icon";
import NumberAuthentication from "../NumberAuthentication";
import { useHistory } from "react-router-dom";
import history from "../history";
import { useState, useEffect } from 'react';
import Home from "./Home";
import firebaseConfig  from '../firebaseConfig';
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import '../firebase-ui-auth.css';
import Login from "./Login";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function LoginOTP() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  // //phone authentication
useEffect(() => {
  const fbase = firebase.initializeApp(firebaseConfig);
  const uiConfig = {
    signInSuccessUrl: "Login", 
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
  };
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#firebaseui-auth-container", uiConfig);
}

);




  const submitClick = () => {
    const date1 = new Date();
    const date2 = new Date(document.getElementById("date-picker-inline").value);
    const year = date1.getFullYear() - date2.getFullYear();

    const month = date1.getMonth() - date2.getMonth();

    var age = calculate_age(date2);
    localStorage.setItem("age", age);

    var gender = document.getElementById("gender");

    localStorage.setItem("gender", gender);
    history.push("/Home");
  };

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getFullYear() - 1970);
  }


  return (

    <div>
    <form class="pt-3 pl-3">
      {/* <div id="mobileNumberdiv">
        <TextField
          className={classes.margin}
          id="mobile"
          placeholder="+9156******"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </div> */}


      <div id="firebaseui-auth-container">
      </div>
   
    </form>
    </div>
  );



}

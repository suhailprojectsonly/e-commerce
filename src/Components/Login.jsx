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

export default function Login() {
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



      <div class="container">
      <div class="pt-2">
        <FormControl className={classes.margin} component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            id="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>

      <div>
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={submitClick}
        >
          Submit
        </Button>
      </div>
      </div>
    


      {/* <Button
        variant="outlined"
        size="medium"
        onClick={onClick}
        color="primary"
        className={classes.margin}
      >
        Genereate OTP
      </Button> */}

      {/* <div class="pt-2" id="otp">
        <Input
          placeholder="OTP"
          className={classes.margin}
          inputProps={{ "aria-label": "description" }}
        />
      </div>

      <Button
        variant="outlined"
        size="medium"
        onClick="codeVerify()"
        color="primary"
        className={classes.margin}
      >
        Verify Code
      </Button> */}

    </form>
    </div>
  );



}

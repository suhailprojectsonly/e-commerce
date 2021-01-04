import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);


export default function Login() {
 
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
      
  return (
    <form class = "pt-3 pl-3">

<div id = "mobileNumber">        
<TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="+9156******"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div id = "recaptcha-contrainer"></div>
</div>

<Button variant="outlined" size="medium" onClick = "phoneAuth()" color="primary" className={classes.margin}>
Genereate OTP
        </Button>


<div class= "pt-2" id= "otp">
<Input placeholder="OTP" className={classes.margin}  inputProps={{ 'aria-label': 'description' }} />
</div>
        <Button variant="outlined" size="medium" onClick = "codeVerify()" color="primary" className={classes.margin}>
Verify Code
        </Button>



<div class = "pt-2">
<FormControl className={classes.margin} component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
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
            'aria-label': 'change date',
          }}
        />
          </MuiPickersUtilsProvider>

<div>
<Button className={classes.margin} variant="contained" color="primary">
Submit
</Button>
</div>
</form>

  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { TextField, NoSsr } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
FormUser:{
marginRight:"30px",
width:"260px" ,
},
nameWhidth:{
  width:"290px",
},

}));

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: red;
      
      margin-Right:"15px"
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

export default function  Profile  ()  {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <form className={classes.FormUser} noValidate autoComplete="off">
    <StyledTextField lassName={classes.FormUser} label="Firs name" variant="outlined"  />
    <StyledTextField lassName={classes.FormUser} label="last name" variant="outlined"  />
    <StyledTextField label="Email" variant="outlined"  />
    <StyledTextField label="Password" variant="outlined"  />
    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Whо</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>User</MenuItem>
          <MenuItem value={20}>Foreman</MenuItem>
          
        </Select>
      </FormControl>
    
  </form>
  ) 
  }

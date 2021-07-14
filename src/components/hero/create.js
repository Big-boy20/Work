import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
FormUser:{
display: 'flex',
flexDirection: 'column',
width: "auto",
flexWrap: 'wrap',
alignContent: 'center',
justifyContent: 'center',
alignItems: 'flex-start',
},
topInput:{
  margin:"0 auto",
  padding: theme.spacing(3),
},
mediumWhidth:{
  width:"110px",
},
bottomInput:{
  margin:"0 auto",

},
inputPad:{
marginRight:"30px",
},
shortWhidth:{
width:"125px",
},
bigWhidth:{
  width:"280px",
},
sendUser:{
marginTop:"30px",
width: "90px",
},
positionCentre:{
margin:"0 auto",

}
}));

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: blue;
      
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
  const nameWidth = clsx(classes.shortWhidth, classes.inputPad);
  const EmailWidth = clsx(classes.bigWhidth, classes.inputPad);
  const handleChange = (event) => {
    setAge(event.target.value);
   
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <form className={classes.FormUser} noValidate autoComplete="off">
      <div className={classes.topInput}>
    <StyledTextField className={nameWidth} label="Firs name" variant="outlined"  />
    <StyledTextField className={nameWidth} label="last name" variant="outlined"  />
    
    <StyledTextField className={EmailWidth} label="Email" variant="outlined"  />
   
    </div>  
    <div className={classes.bottomInput}>
    <StyledTextField className={classes.inputPad} label="Password" variant="outlined"  />
    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel className={classes.inputPad} id="demo-simple-select-filled-label">Whо</InputLabel>
        <Select className={nameWidth}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem  value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>User</MenuItem>
          <MenuItem value={20}>Foreman</MenuItem>
          
        </Select>
      </FormControl>
      </div>
      <div className={classes.positionCentre}>
      <Button
        variant="contained"
        color="primary"
        className={classes.sendUser}
        endIcon={<SendIcon>send</SendIcon>}
        onClick={handleClick}
      >
        Send
      </Button>
      </div>
      <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This form a send!
        </Alert>
      </Snackbar>
      
    </div>
  </form>
  ) 
  }

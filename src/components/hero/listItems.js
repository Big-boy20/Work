import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import PeopleIcon from '@material-ui/icons/People';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  
  TextTableStyle :{
    marginBottom:"20px",
  },
  '@global':{
    '.MuiListItem-gutters':{
      paddingRight:"0px",
     },
    },
  naw:{
display:"flex",
textDecoration:"none",
    color:"#000",
    fontSize:"16px",
    paddingBottom:"1px",
    alignitems: "center",
    width: "245px",
    '&:hover': {
      textDecoration:"none",
      color:"#000",
    }
  },

}));



export default function MainListItems  () {
  const classes = useStyles();
  return (
  <div>
   
    <ListItem>
    <NavLink to ="/Profile" className={classes.naw}>
    <CssBaseline />
      <ListItemIcon>
        <AccessibleForwardIcon />
      </ListItemIcon>
     Profile</NavLink>
    </ListItem>
 
    <ListItem >
    <NavLink className={classes.naw} to ="/Create">
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      Create</NavLink> 
    </ListItem>


    <ListItem >
    <NavLink className={classes.naw} to ="/History">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      History</NavLink>
    </ListItem>

    <ListItem >
    <NavLink className={classes.naw} to ="/AccessTime">
      <ListItemIcon>
        <AccessTimeIcon />
      </ListItemIcon>
      AccessTime</NavLink>
    </ListItem>

    <ListItem >
    <NavLink className={classes.naw} to ="/ControlAdmins">
    <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
     Control Admins</NavLink>
    </ListItem>
    <ListItem  >
    <NavLink className={classes.naw} to ="/lockAdd">
    <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      lock add</NavLink>
    </ListItem>
  
  </div>
  )
};


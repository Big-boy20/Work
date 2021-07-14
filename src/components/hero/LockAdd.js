import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
ButtonMenu:{
  width:"110px",
  
},
ButtonMenuDelete:{
  width:"110px",
  float:"right"
},
inputPad:{
  marginRight:"30px",
  },

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





  


 


function createData(name, id, uid, carbs, protein, price) {
    return {
      name,
      id,
      uid,
      history: [
        { date: "2020-01-05", customerId: "11091700", amount: 3 },
        { date: "2020-01-02", customerId: "Anonymous", amount: 1 }
      ]
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [isChangeOpened, setChangeOpened] = React.useState(false);
    const [isDeleteOpened, setDeleteOpened] = React.useState(false);
    const classes =  useStyles();
    const onChangeClick = (value) => {

      setChangeOpened(value);
      value && setDeleteOpened(false)
      
     }

     const onDeleteClick = (value) => {
      setDeleteOpened(value);
      value && setChangeOpened(false)
     }
    
   
    return (
       
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.id}</TableCell>
          <TableCell align="right">{row.uid}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                <Button onClick={onChangeClick}className={classes.ButtonMenu} color="primary">
                 Change
                </Button>
                <Button onClick={onDeleteClick} className={classes.ButtonMenuDelete} color="secondary">
                 Delete
                </Button>
                 
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                     
                      {isChangeOpened ? (
                                 <div>
            <StyledTextField className={classes.inputPad} value={row.name} label="Name" variant="outlined"  />
         <StyledTextField  className={classes.inputPad} value={row.id} label="Id" variant="outlined"  />
         <StyledTextField className={classes.inputPad} value={row.uid} label="Uid" variant="outlined"  />
          </div>
                ) : null}
                      {isDeleteOpened ? <span>2</span> : null}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                       
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };
const rows = [
    createData('one', 159, 6.0, 24),
    createData('two', 237, 9.0, 37),
    createData('tree', 262, 16.0, 24),
    createData('four', 305, 3.7, 67),
    createData('five', 356, 16.0, 49),
  ];

export default function  LockAdd () {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Uid</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
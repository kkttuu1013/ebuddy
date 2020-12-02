import React from 'react';
import {createStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fontWeight } from '@material-ui/system';

const useStyles = makeStyles(() => {
  createStyles( {
    "button":{
        boderColor:"#FF8549",
        color:"FFF",
        marginBottom:"8px",
        "&:hover": {
          backgroundColor:"FF85489",
          color: "#FFF"
        }
      }
  })
});

export default function OutlinedButtons() {
  const classes = useStyles();
  

  return (
    
    <Button 
    　className={classes.button}
  　variant="contained">ログイン</Button>
  
      
  );
}

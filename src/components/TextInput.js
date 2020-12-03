import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const TextInput = (props) => {

  const useStyles = makeStyles({
    text:{
      paddingBottom:'35px',
      backgroundColor:'#FFF',
      flex: 1,
      margin:'auto'
    }
  });

  const classes = useStyles();

  return(
    <TextField
     fullWidth={true}
     label={props.label}
     multiline={props.multiline}
     rows={props.rows}
     value={props.value}
     type={props.type}
     onChange={props.onChange}
     placeholder={props.placeholder}
     className={classes.text}
    />
  )
}

export default TextInput;
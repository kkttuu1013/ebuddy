import React,{useState,useCallback,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextInput from './TextInput';
import {makeStyles} from '@material-ui/core/styles';






const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("")

  const inputPassWord = useCallback((event) => {
    setPassword(event.target.value)
  },[setPassword]);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail]);

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  },[setDescription]);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 



  const style = {
    background: 'linear-gradient(45deg, #9999FF 30%, #bf4fce 90%)',
    borderRadius: 20,
    border: 0,
    color: 'white',
    height: 48,
    width: 235,
    padding: '0 30px',
    boxShadow: '0 1px 3px 1px rgba(255, 105, 135, .3)',
    fontSize:'20px',
    textAlign:'center'
  };



  const useStyles = makeStyles({
    Button:{
      display:'inline-block',
    padding: '0.3em 1em',
    color: '#67c5ff',
    border: 'solid 2px #67c5ff',
    borderRadius: '3px',
    transition: '.4s',
    "&:hover":{
      background: '#67c5ff',
      color: 'white'
    },
      
    }
  });

 const classes = useStyles();




  return (
    <div>
      <Button 
      style={style}
      onClick={handleClickOpen}>
        {props.name}
      </Button>
    
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-slide-title">
          ログインしてください
        </DialogTitle>
        <DialogContent>
        <TextInput
              label={"E-mail(必須)"} multiline={false} rows={1}
              value={email} type={"text"} onChange={inputEmail}
              placeholder={"E-mailを入力してください"}
              />

            <TextInput
              label={"Password"} multiline={false} rows={1}
              value={password} type={"text"} onChange={inputPassWord}
              placeholder={"passwordを入力してください"}
              />
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleClose} 
          color="primary"
          variant="contained" >
            ログイン
          </Button>

          <Button 
          onClick={handleClose} 
          color="primary"
          variant="contained" 
          >
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
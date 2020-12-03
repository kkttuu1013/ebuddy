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
  return <Slide direction="down" ref={ref} {...props} />;
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
 



  



  const useStyles = makeStyles({
    Button:{
    display:'inline-block',
    padding: '0.6em 2em',
    color: '#FFF',
    border: 'solid 2px #FFF',
    borderRadius: '10px',
    transition: '.2s',
    "&:hover":{
      background: '#BA55D3',
      color: 'white',
      borderColor:'#BA55D3'

    },
      
    }
  });

 const classes = useStyles();




  return (
    <div>
      <Button 
      className={classes.Button}
      onClick={handleClickOpen}>
        会員登録
      </Button>
    
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-slide-title">
          メールアドレスを記入
        </DialogTitle>
        <DialogContent>
        <TextInput
              label={"E-mail(必須)"} multiline={false} rows={1}
              value={email} type={"text"} onChange={inputEmail}
              placeholder={"E-mailを入力してください"}
              />
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleClose} 
          color="primary"
          variant="contained" >
            送信
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
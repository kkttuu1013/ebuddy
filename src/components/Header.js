import React from 'react';
import { makeStyles, withStyles,createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormFormat from './FormFormat';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity:1,
    '& > span': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#A16EFF',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(24),
    marginRight: theme.spacing(0),
    '&:focus': {
      opacity: 1,
      color:'#A16EFF'
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixd'
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: 'transparent',
  },
}));



export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
    
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="LOGO" />
          <StyledTab label="ホーム" />
          <StyledTab label="プレイ" />
          <StyledTab label="コミュニティ" />
          <div className="LoginButton">
          <LoginButton  />
          </div>
          <div className="sign-up">
          <SignUpButton  />
          </div>
        <Typography className={classes.padding} />
        </StyledTabs>
      


        
      </div>
    </div>
  );
}
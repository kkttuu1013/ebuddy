import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Ebutton from './Ebutton';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #9057FF',
  },
  indicator: {
    backgroundColor: '#9057FF',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightLarge,
    marginRight: theme.spacing(1),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#9057FF',
      opacity: 1,
    },
    '&$selected': {
      color: '#9057FF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#9057FF',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

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
    marginRight: theme.spacing(3),
    '&:focus': {
      opacity: 1,
      color:'#A16EFF'
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
        </StyledTabs>
        <div className="sign-up">
          
        </div>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
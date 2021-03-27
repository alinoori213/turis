import React, { useEffect, useState } from 'react';
import Login from './Login'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'IranianSans',
  },
  appbar: {
    background: '#1d9ade',
  },
  appbarWrapper: {
    alignItems:'center',
    width: '95%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '1rem',
  },
  colorText: {
    color: '#081338',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#081338',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      {/* <AppBar className={classes.appbar} elevation={0}> */}
      <AppBar className={classes.appbar} >
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          کوه<span className={classes.colorText}>پایه</span>
          </h1>
          
          {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}
          <Button color='inherit' href= '/Login' >درباره ما</Button>
          <Button color='inherit' href= '/Login' >باشگاه ها</Button>
          <Button color='inherit' href= '/Login' >ایونت ها</Button>
          <Router><Button color='inherit' href= '/Login' >ورود / ثبت نام</Button></Router>
          
          
          
          
         
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            به 
            کوه<span className={classes.colorText}>پایه </span><br />
             خوش آمدید
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

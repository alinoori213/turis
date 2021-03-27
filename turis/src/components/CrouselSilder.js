import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from './Item';
import '../styles/CrouselSlider.css'
import styled from "styled-components";
import MediaCard from './MediaCard';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue,green, purple } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function CrouselSilder() {
  const classes = useStyles();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

    return (
        <div className="CrouserSlider">
          <div className='eventHeader'>
        
          <h3 className='clubText' > باشگاه ها</h3>
          </div>
          <Carousel className='Slider' style={{backgroundColor: '', }} breakPoints={breakPoints}  >
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
          </Carousel>
          <div className='clubButton'>
          <ColorButton variant="contained" color="primary" className={classes.margin}>
        بیشتر
      </ColorButton>
          </div>
          <Divider />
          <div className='eventHeader'>
        
          <h3 className='clubText' > ایونت ها</h3>
          </div>
          <Carousel className='Slider' style={{backgroundColor: '', }} breakPoints={breakPoints}  >
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
          </Carousel>
          <div className='clubButton'>
          <ColorButton variant="contained" color="primary" className={classes.margin}>
        بیشتر
      </ColorButton>
          </div>
          
        
      
        
      </div>


    );
}
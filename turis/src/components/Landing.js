import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import PlaceToVisit from './PlaceToVisit.js';
import GridSlider from './GridSlider.js';
import { Helmet } from 'react-helmet'
import { FooterContainer } from '../containers/footer'
import CrouselSilder from './CrouselSilder';
import MediaCard from './MediaCard';


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
          <title>کوهپایه</title>
      </Helmet>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      {/* <GridSlider /> */}
      <CrouselSilder />
      {/* <MediaCard/> */}
      <FooterContainer />
      
    </div>
  );
}

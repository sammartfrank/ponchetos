import React, { FC, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

import Slider from '../Slider/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageWrapper: {
      padding: '0',
      margin: '0',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    },
    fullCover: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'fixed'
    },
    heroTitle: {
      position: 'absolute',
      color: 'white',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    [theme.breakpoints.down('sm')]: {
      respFont: {
        fontSize: theme.spacing(3),
        letterSpacing: theme.spacing(1)
      }
    },
    [theme.breakpoints.up('md')]: {
      respFont: {
        fontSize: theme.spacing(8),
        fontWeight: 500,
        letterSpacing: theme.spacing(8)
      }
    }
  })
);

const images = [
  'https://images.unsplash.com/photo-1572464126136-e24a71f7a587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1580876206759-4b35613ca39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1573398579011-28def4504fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
];

const Hero: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Slider slides={images} autoPlay={false} />
      <div className={classes.heroTitle}>
        <Fade in={true} timeout={{ enter: 1500, exit: 1600 }}>
          <Typography color="inherit" className={classes.respFont}>
            Ponchetos
          </Typography>
        </Fade>
      </div>
    </div>
  );
};
export default Hero;

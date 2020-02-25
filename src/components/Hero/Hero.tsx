import React, { FC, useState, useEffect } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

import marcito from '../../assets/marcito.jpg';
import sea from '../../assets/sea.mp4';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    videoWrapper: {
      padding: '0',
      margin: '0',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    },
    fullCover: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    heroTitle: {
      position: 'absolute',
      color: 'white',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    bold: {
      fontWeight: 800,
      fontSize: theme.spacing(10),
      letterSpacing: theme.spacing(4)
    }
  })
);

const Hero: FC = () => {
  const classes = useStyles();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  return (
    <div>
      <div className={classes.videoWrapper}>
        {/* <video autoPlay loop muted className={classes.fullCover}>
          <source src={sea} type="video/mp4" />
        </video> */}
        <img src={marcito} alt="" className={classes.fullCover} />
      </div>
      <div className={classes.heroTitle}>
        <Fade in={ready}>
          <Typography color="inherit" variant="h2" className={classes.bold}>
            Ponchetos
          </Typography>
        </Fade>
      </div>
    </div>
  );
};
export default Hero;

import React, { FC, useState, useEffect } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

import marcito from '../../assets/marcito.jpg';

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
      fontWeight: 600,
      fontSize: theme.spacing(10),
      letterSpacing: theme.spacing(9)
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
        <img
          src="https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className={classes.fullCover}
        />
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

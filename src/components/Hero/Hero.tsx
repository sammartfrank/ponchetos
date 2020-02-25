import React, { FC, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

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
    }
  })
);

const Hero: FC = () => {
  const classes = useStyles();
  const [ready, setReady] = useState(false);

  return (
    <div>
      <div className={classes.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className={classes.fullCover}
        />
      </div>
      <div className={classes.heroTitle}>
        {ready ? (
          <Fade in={ready} timeout={{ enter: 1500, exit: 1600 }}>
            <Typography color="inherit" variant="h2">
              Conexion
            </Typography>
          </Fade>
        ) : (
          <Fade in={!ready} timeout={{ enter: 1500, exit: 1600 }}>
            <Typography color="inherit" variant="h2">
              Ponchetos
            </Typography>
          </Fade>
        )}
      </div>
    </div>
  );
};
export default Hero;

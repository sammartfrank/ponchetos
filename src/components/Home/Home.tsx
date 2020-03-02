import React, { FC, useEffect, useState, useRef } from 'react';
import {
  Container,
  useScrollTrigger,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core';
import Textin from './Text';
import Ponchos from './Ponchos/Ponchos';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down('sm')]: {
      homeBack: {
        backgroundImage: `url(https://images.unsplash.com/photo-1473110219771-053affa3adc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80)`
      },
      imageWrapper: {
        padding: '0',
        margin: '0',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1
      },
      fullCover: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    [theme.breakpoints.up('md')]: {
      homeBack: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        position: 'relative'
      }
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const [trig, setTrig] = useState(false);
  const [trig2, setTrig2] = useState(false);

  const titleTrigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 350
  });

  const textTrigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 450
  });

  useEffect(() => {
    setTrig(!trig);
  }, [titleTrigger]);

  useEffect(() => {
    setTrig2(!trig2);
  }, [textTrigger]);

  return (
    <div className={classes.root}>
      <div className={classes.homeBack}>
        <Container maxWidth="sm" className={classes.textMarg}>
          <Textin trig={trig} trig2={trig2} />
        </Container>
      </div>
      <Ponchos />
    </div>
  );
};

export default Home;

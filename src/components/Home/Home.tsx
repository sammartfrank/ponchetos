import React, { FC, useEffect, useState, useRef } from 'react';
import {
  Typography,
  Container,
  Slide,
  Fade,
  useScrollTrigger
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MemoItem from '../Item/MemoItem';
import { Item } from '../../providers/cartContext';

import { ponchos } from './ponchos';
import Textin from './Text';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    homeBack: {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      position: 'relative'
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const [list, setList] = useState<Item[]>([]);
  const [trig, setTrig] = useState(false);
  const [trig2, setTrig2] = useState(false);
  useEffect(() => {
    setList(ponchos);
  }, []);

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 350
  });

  const trigger2 = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 450
  });

  useEffect(() => {
    setTrig(!trig);
  }, [trigger]);

  useEffect(() => {
    setTrig2(!trig2);
  }, [trigger2]);

  return (
    <div className={classes.homeBack}>
      <Container maxWidth="sm">
        <Textin trig={trig} trig2={trig2} />
      </Container>
    </div>
  );
};

export default Home;

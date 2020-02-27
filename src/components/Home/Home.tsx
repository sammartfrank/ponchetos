import React, { FC, useEffect, useState } from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MemoItem from '../Item/MemoItem';
import { Item } from '../../providers/cartContext';

import { ponchos } from './ponchos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      zIndex: 1
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    textPoncheto: {
      marginBottom: theme.spacing(5)
    },
    span: {
      color: 'darkgreen',
      marginLeft: theme.spacing(1)
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
    },
    textWrapper: {
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      background: 'rgba(255, 255, 255, 1)'
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    setList(ponchos);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.title}
          >
            Nuestros Productos
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.textPoncheto}
          >
            Hechos a medida, a mano y con la mejor microfibra de toalla. Con
            nuestras propias maquinas, con nuestra fuerza del
            <span className={classes.span}>Mar.</span>
          </Typography>
          {list
            ? list.map(({ name, count, id, url }, i) => (
                <MemoItem ponchoName={name} key={i} ponchoImage={url} />
              ))
            : 'No Items'}
        </Container>
      </div>
    </div>
  );
};

export default Home;

import React, { FC, useContext } from 'react';
import { Typography, Grid, Backdrop } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MemoItem from '../Item/MemoItem';

import { CartProvider } from '../../providers/CartProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(20)
    },
    title: {
      margin: theme.spacing(4)
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const Cart = useContext(CartProvider);
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {Cart.products.ponchos.map(
          ({ name, price, size, url, desc, color }, i) => (
            <MemoItem
              ponchoName={name}
              ponchoPrice={price}
              ponchoSize={size}
              ponchoImage={url}
              ponchoDescription={desc}
              ponchoColor={color}
              key={i}
            />
          )
        )}
      </Grid>
    </div>
  );
};

export default Home;

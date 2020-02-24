import React, { FC, useContext } from 'react';
import { Grid, Backdrop, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MemoItem from '../Item/MemoItem';
import cartContext from '../../providers/cartContext';

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
  const { cart } = useContext(cartContext);
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {cart.length ? (
          cart.map(item => <MemoItem />)
        ) : (
          <Typography variant="subtitle1">No Items</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Home;

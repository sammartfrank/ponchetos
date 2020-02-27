import React, { FC, useContext, useState, useEffect } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Divider, Typography, Button } from '@material-ui/core';
import cartContext from '../../providers/cartContext';
import CartItem from './CartItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(40)
    },
    cartText: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: theme.spacing(3)
    },
    itemCart: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'row'
    },
    tallyWrapper: {
      padding: theme.spacing(3)
    },
    alignMargin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);

interface Props {
  open: boolean;
  toggleDrawer: () => void;
}

const Carting: FC<Props> = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  const { cart, removePd, subtotal } = useContext(cartContext);

  const handleRemove = (index: number) => {
    return removePd && removePd(index);
  };
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <div className={classes.root}>
        {cart.length > 0 ? (
          cart.map(({ name, count, price }, i) => (
            <CartItem name={name} count={count} key={i} price={price} />
          ))
        ) : (
          <Grid container>
            <Typography className={classes.cartText}>
              No hay productos seleccionados
            </Typography>
          </Grid>
        )}
        <Divider />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
          className={classes.tallyWrapper}
        >
          <Grid item className={classes.alignMargin}>
            <Typography variant="h6" component="h6">
              Total: ${subtotal}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              type="submit"
              color="secondary"
              onClick={() => console.log('checkout on spot')}
              className={classes.alignMargin}
              disabled={cart.length === 0}
            >
              Realizar Pedido
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              onClick={toggleDrawer}
              className={classes.alignMargin}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default Carting;

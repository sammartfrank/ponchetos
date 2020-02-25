import React, { FC, useContext, useState, useEffect } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Divider, Typography, Button } from '@material-ui/core';
import cartContext, { Item } from '../../providers/cartContext';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(40)
    },
    cartText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(2)
    },
    itemCart: {
      padding: theme.spacing(3)
    },
    tallyWrapper: {
      padding: theme.spacing(3)
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
        <Grid container direction="column">
          {cart.length > 0 ? (
            cart.map(({ name, count, price }, i) => (
              <Grid key={i} item className={classes.itemCart}>
                <Typography>{name}</Typography>
                <Typography>
                  Unidad: {count} {count > 1 ? 'unidades' : 'unidad'}
                </Typography>
                <Typography>Precio: ${price}</Typography>
                <Grid item>
                  <Button component="button" onClick={() => handleRemove(i)}>
                    <DeleteOutlinedIcon />
                  </Button>
                </Grid>
                <Divider />
              </Grid>
            ))
          ) : (
            <Grid item>
              <Typography className={classes.cartText}>
                No hay productos seleccionados
              </Typography>
            </Grid>
          )}
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.tallyWrapper}
        >
          <Grid item>
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
            >
              Realizar Pedido
            </Button>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

export default Carting;

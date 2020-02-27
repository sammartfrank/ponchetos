import React, { FC } from 'react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

interface Props {
  count: number;
  price: number;
  name: string;
}

const CartItem: FC<Props> = ({ count, price, name }) => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Grid container item direction="column">
        <Grid item>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            {count} {count > 1 ? 'unidades' : 'unidad'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textPrimary">
            ${price}
          </Typography>
        </Grid>
      </Grid>
      <Button component="button">
        <DeleteOutlinedIcon />
      </Button>
    </Grid>
  );
};

export default CartItem;

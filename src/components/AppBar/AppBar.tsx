import React, { FC, useContext } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { CartProvider } from '../../providers/CartProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(3)
    },
    title: {
      flexGrow: 1
    }
  })
);

interface Props {
  appName: string;
  handleToggle: () => void;
}

const Appbar: FC<Props> = ({ appName, handleToggle }) => {
  const classes = useStyles();
  const Cart = useContext(CartProvider);
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {appName}
          </Typography>
          <Button color="inherit" onClick={handleToggle}>
            <Badge badgeContent={Cart.items.length}>
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;

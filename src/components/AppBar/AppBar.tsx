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
import cartContext from '../../providers/cartContext';

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
  const { cartCount } = useContext(cartContext);
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
          <Button onClick={handleToggle} color="inherit">
            <Badge badgeContent={cartCount} color="secondary" showZero>
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;

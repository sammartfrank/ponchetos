import React, { FC, useContext, memo, useState, useEffect } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  Button,
  useScrollTrigger,
  Slide
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import cartContext from '../../providers/cartContext';

import ep from '../../../ara.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(3),
      color: 'white'
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
    palidCart: {
      color: 'white'
    },
    paddingCart: {
      padding: theme.spacing(3)
    },
    setBackground: {
      background: 'rgba(0,0,0,0.4)'
    }
  })
);

interface Props {
  appName: string;
  handleToggleMenu: () => void;
  handleToggleCart: () => void;
}

const Appbar: FC<Props> = ({ appName, handleToggleMenu, handleToggleCart }) => {
  const [trig, setTrig] = useState(false);
  const { cartCount } = useContext(cartContext);
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 750
  });

  useEffect(() => {
    setTrig(!trig);
  }, [trigger]);

  return (
    <div className={classes.root}>
      <Slide
        appear={false}
        direction="down"
        in={!trig}
        mountOnEnter
        unmountOnExit
      >
        <AppBar elevation={0} className={classes.setBackground}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              className={classes.menuButton}
              onClick={handleToggleMenu}
            >
              <img src={ep} alt="" height="50" width="50" />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              color="secondary"
            >
              {appName}
            </Typography>
            <Button
              color="inherit"
              className={classes.paddingCart}
              onClick={handleToggleCart}
            >
              <Badge
                badgeContent={cartCount}
                className={classes.palidCart}
                color="secondary"
                showZero
              >
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
};

export default memo(Appbar);

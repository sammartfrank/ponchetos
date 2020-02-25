import React, { FC, useContext } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  Button,
  useScrollTrigger
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
      marginRight: theme.spacing(3),
      color: 'white'
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
    palidCart: {
      color: 'white'
    }
  })
);

interface Props {
  appName: string;
  handleToggle: () => void;
}

interface IProps {
  window?: () => Window;
  children: React.ReactElement;
}

const Appbar: FC<Props> = ({ appName, handleToggle }) => {
  const { cartCount } = useContext(cartContext);
  const classes = useStyles();

  function ChangeOnScroll({ window, children }: IProps) {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 700
    });
    return React.cloneElement(children, {
      color: trigger ? 'inherit' : 'transparent',
      style: {
        background: trigger && 'rgba(0,0,0,0.5)'
      }
    });
  }
  return (
    <div className={classes.root}>
      <ChangeOnScroll>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              color="secondary"
            >
              {appName}
            </Typography>
            <Button onClick={handleToggle} color="inherit">
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
      </ChangeOnScroll>
    </div>
  );
};

export default Appbar;

import React, { FC } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Switch
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrod: 1
    },
    menuButton: {
      marginRight: theme.spacing(3)
    },
    title: {
      flexGrod: 1
    }
  })
);

interface Props {
  appName: string;
  checked: boolean;
  handleChange: () => void;
}

const Appbar: FC<Props> = ({ appName, checked, handleChange }) => {
  const classes = useStyles();
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
          <Switch
            checked={checked}
            onChange={handleChange}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;

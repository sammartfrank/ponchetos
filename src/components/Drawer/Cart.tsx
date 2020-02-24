import React, { FC, useContext } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(25)
    },
    cartText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(2)
    }
  })
);

interface Props {
  open: boolean;
  toggleDrawer: () => void;
}

const Carting: FC<Props> = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <div className={classes.root}>
        <Grid container></Grid>
      </div>
    </Drawer>
  );
};

export default Carting;

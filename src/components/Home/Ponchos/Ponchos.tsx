import React, { FC, useEffect, useState } from 'react';

import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import ProgressBar from '../../ProgressBar/ProgressBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down('sm')]: {
      root: {
        backgroundImage: `url(https://images.unsplash.com/photo-1560233863-7b0ea060b62e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=572&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }
    },
    [theme.breakpoints.up('md')]: {
      root: {
        backgroundImage: `url(https://images.unsplash.com/photo-1512115549354-d9a60c97f640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      },
      inprogress: {
        marginBottom: theme.spacing(5)
      }
    }
  })
);

const Ponchos: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.prog}>
        <Typography color="inherit" className={classes.inprogress}>
          Productos en Construccion, gracias!
        </Typography>
        <ProgressBar progress={87} />
      </div>
    </div>
  );
};

export default Ponchos;

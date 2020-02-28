import React, { FC, useState } from 'react';

import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({ root: { border: '1px solid red' } })
);
const ProgressBar: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Container maxWidth="sm"></Container>
      </div>
    </div>
  );
};

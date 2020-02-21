import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(20)
    }
  })
);

const Muebles: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h4">
          Camil a<span style={{ color: 'red' }}>Quilez</span> traigo unos
          muebles...
        </Typography>
      </Container>
    </div>
  );
};

export default Muebles;

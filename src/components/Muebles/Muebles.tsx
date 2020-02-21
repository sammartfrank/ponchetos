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
        <div>
          <img
            src="https://images.unsplash.com/photo-1546121519-91d95d8fa183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Muebles;

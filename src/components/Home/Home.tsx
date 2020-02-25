import React, { FC, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MemoItem from '../Item/MemoItem';
import { Item } from '../../providers/cartContext';

import { ponchos } from './ponchos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8)
    },
    title: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10)
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    setList(ponchos);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography
          variant="h2"
          color="textSecondary"
          className={classes.title}
        >
          Nuestros Productos
        </Typography>
      </Grid>

      <Grid container justify="center">
        {list
          ? list.map(({ name, count, id, url }, i) => (
              <MemoItem ponchoName={name} key={i} ponchoImage={url} />
            ))
          : 'No Items'}
      </Grid>
    </div>
  );
};

export default Home;

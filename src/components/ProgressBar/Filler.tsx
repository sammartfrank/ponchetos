import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'black',
      height: theme.spacing(3),
      padding: theme.spacing(2),
      color: 'white',
      borderRadius: 'inherit'
    }
  })
);

interface Props {
  width: number;
}

const Filler: FC<Props> = ({ width }) => {
  const classes = useStyles();
  const styling = {
    width: `${width}%`
  };
  return (
    <div className={classes.root} style={styling}>
      <p>{width}%</p>
    </div>
  );
};

export default Filler;

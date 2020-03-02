import React, { FC } from 'react';

import Filler from './Filler';

import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progressBar: {
      border: '1px solid black',
      maxwidth: '430px',
      width: 'inherit',
      margin: theme.spacing(1)
    }
  })
);
interface Props {
  progress: number;
}
const ProgressBar: FC<Props> = ({ progress }) => {
  const classes = useStyles();
  return (
    <div className={classes.progressBar}>
      <Filler width={progress} />
    </div>
  );
};

export default ProgressBar;

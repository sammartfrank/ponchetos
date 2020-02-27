import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      height: '50px',
      width: '50px',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '50%',
      cursor: 'pointer',
      alignItems: 'center',
      transition: `transform ease-in 0.1s`
    }
  })
);

interface IProps {
  direction: string;
  handleClick: () => void;
}

const Arrow: FC<IProps> = ({ direction, handleClick }): React.ReactElement => {
  const classes = useStyles();

  const dir = direction === 'right' ? { right: '25px' } : { left: '25px' };

  return (
    <div className={classes.root} onClick={handleClick} style={dir}>
      {direction === 'right' ? (
        <ArrowRightIcon color="action" />
      ) : (
        <ArrowLeftIcon color="action" />
      )}
    </div>
  );
};

export default Arrow;

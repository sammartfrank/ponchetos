import React, { FC, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex'
    }
  })
);

interface IProp {
  translate: number;
  transition: number;
  width: number;
  children: React.ReactElement[];
}

const SliderContent: FC<IProp> = ({
  translate,
  transition,
  width,
  children
}) => {
  const classes = useStyles();
  const style = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    width: `${width}px`
  };
  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  );
};

export default SliderContent;

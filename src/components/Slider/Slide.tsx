import React, { FC, memo } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface IProps {
  content: string;
  width: number;
}

const Slide: FC<IProps> = ({ content, width }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: '100%',
        width: `${width}px`,
        backgroundImage: `url(${content})`,
        backgroundSize: 'cover',
        backgrounRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    })
  );
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default memo(Slide);

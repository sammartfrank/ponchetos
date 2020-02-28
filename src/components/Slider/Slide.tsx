import React, { FC, memo } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      backgroundSize: 'cover',
      backgrounRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  })
);

interface IProps {
  content: string;
  width: number;
}

const Slide: FC<IProps> = ({ content, width }) => {
  const style = {
    width: `${width}px`,
    backgroundImage: `url(${content})`
  };

  const classes = useStyles();
  return <div className={classes.root} style={style}></div>;
};

export default memo(Slide);

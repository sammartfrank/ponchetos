import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// import sea from '../../assets/sea.webm';
import marcito from '../../assets/marcito.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      margin: '0',
      width: '100%',
      position: 'absolute',
      height: '100vh',
      //   border: '1px solid red',
      top: '0',
      overflowX: 'hidden',
      left: '0',
      tranform: 'translate(-50%, -50%)'
    }
  })
);

const Hero: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={marcito} />
      {/* <video autoPlay loop muted>
        <source src={sea} />
      </video> */}
    </div>
  );
};
export default Hero;

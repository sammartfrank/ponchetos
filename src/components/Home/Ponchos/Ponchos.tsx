import React, { FC, useEffect, useState } from 'react';

import {
  createStyles,
  makeStyles,
  Theme,
  Fade,
  Slide,
  useScrollTrigger,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'white',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '&:hover': {
      color: '#ff0000'
    }
  })
);

const Ponchos: FC = () => {
  const classes = useStyles();
  const [trig, setTrig] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTrig(true);
    }, 500);
  }, []);

  return (
    <Slide
      appear={true}
      direction="up"
      in={trig}
      timeout={{ enter: 600, exit: 600 }}
    >
      <div className={classes.root}>
        <Typography variant="h2" color="inherit">
          Productos en Construccion, gracias!
        </Typography>
      </div>
    </Slide>
  );
};

export default Ponchos;

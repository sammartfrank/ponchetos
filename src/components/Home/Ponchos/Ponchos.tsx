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
    [theme.breakpoints.down('sm')]: {
      root: {
        backgroundImage: `url(https://images.unsplash.com/photo-1560233863-7b0ea060b62e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=572&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    [theme.breakpoints.up('md')]: {
      root: {
        backgroundImage: `url(https://images.unsplash.com/photo-1512115549354-d9a60c97f640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
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
        <Typography color="inherit">
          Productos en Construccion, gracias!
        </Typography>
      </div>
    </Slide>
  );
};

export default Ponchos;

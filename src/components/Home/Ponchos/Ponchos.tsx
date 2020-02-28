import React, { FC, useEffect, useState } from 'react';

import {
  createStyles,
  makeStyles,
  Theme,
  Fade,
  Slide,
  useScrollTrigger,
  Typography,
  Button
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

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
        alignItems: 'center',
        position: 'relative'
      },
      closeSect: {
        position: 'absolute',
        top: 75,
        right: 10
      }
    }
  })
);

interface IProps {
  handleSection: () => void;
}

const Ponchos: FC<IProps> = ({ handleSection }) => {
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
        <div className={classes.closeSect}>
          <Button onClick={handleSection}>
            <CloseIcon />
          </Button>
        </div>
        <Typography color="inherit">
          Productos en Construccion, gracias!
        </Typography>
      </div>
    </Slide>
  );
};

export default Ponchos;

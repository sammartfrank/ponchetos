import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Slide, Typography, Button } from '@material-ui/core';

interface Props {
  trig: boolean;
  handlePurchase: () => void;
  trig2: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Mobile
    [theme.breakpoints.down('sm')]: {
      // Object Structure
      textWrapper: {
        display: 'flex',
        paddingTop: theme.spacing(10),
        flexDirection: 'column'
      },
      //Title
      title: {
        color: 'white',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
      },
      //Text
      textPoncheto: {
        marginBottom: theme.spacing(5),
        lineHeight: theme.spacing(0.3),
        color: 'white',
        textAlign: 'justify'
      },
      //Button
      button: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: 'white'
      }
    },
    [theme.breakpoints.up('md')]: {
      textWrapper: {
        display: 'flex',
        paddingTop: theme.spacing(10),
        flexDirection: 'column'
      },
      title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: 'black'
      },
      button: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        alignItems: 'center'
      }
    }
  })
);

const Textin: FC<Props> = ({ trig, trig2, handlePurchase }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <Slide
          appear={false}
          direction="up"
          in={!trig}
          timeout={{ enter: 750, exit: 750 }}
        >
          <Typography variant="h3" component="h3" className={classes.title}>
            Nuestros Productos
          </Typography>
        </Slide>
        <Slide
          in={!trig2}
          direction="up"
          appear={false}
          timeout={{ enter: 750, exit: 750 }}
        >
          <Typography
            variant="body1"
            component="p"
            className={classes.textPoncheto}
          >
            Hechos a medida, a mano y con la mejor microfibra de toalla. Con
            nuestras propias maquinas, con nuestra fuerza del Mar. Una verdadera
            pasion, que nos impulsa a emprender nuevos caminos, nuevos
            horizontes, nuevas emociones.
          </Typography>
        </Slide>
      </div>
      <Slide
        in={!trig2}
        direction="up"
        appear={false}
        timeout={{ enter: 800, exit: 500 }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={handlePurchase}
          className={classes.button}
        >
          Comprar
        </Button>
      </Slide>
    </div>
  );
};

export default Textin;

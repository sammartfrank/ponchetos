import React, { FC } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Slide, Typography, Button } from '@material-ui/core';

interface Props {
  trig: boolean;
  trig2: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'justify',
      paddingTop: theme.spacing(15),
      marginBottom: theme.spacing(10)
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    textPoncheto: {
      marginBottom: theme.spacing(5)
    },
    span: {
      color: 'darkgreen',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
);

const Textin: FC<Props> = ({ trig, trig2 }) => {
  const classes = useStyles();
  return (
    <div className={classes.textWrapper}>
      <Slide
        appear={false}
        direction="up"
        in={!trig}
        timeout={{ enter: 750, exit: 750 }}
      >
        <Typography
          variant="h3"
          color="textPrimary"
          component="h3"
          className={classes.title}
        >
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
          color="textPrimary"
          component="p"
          className={classes.textPoncheto}
        >
          Hechos a medida, a mano y con la mejor microfibra de toalla. Con
          nuestras propias maquinas, con nuestra fuerza del
          <span className={classes.span}>Mar.</span>
          Una verdadera pasion, que nos impulsa a emprender nuevos caminos,
          nuevos horizontes, nuevas emociones.
        </Typography>
      </Slide>
      <Button variant="contained" color="primary">
        Comprar
      </Button>
    </div>
  );
};

export default Textin;

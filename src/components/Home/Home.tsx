import React, { FC } from 'react';
import { Typography, Grid, Backdrop } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Item from '../Item/Item';

import mauiImage from '../../assets/maui.jpeg';
import ticoImage from '../../assets/tico.jpeg';
import mayaImage from '../../assets/maya.jpeg';
import tikiImage from '../../assets/tiki.jpeg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(20)
    },
    title: {
      margin: theme.spacing(4)
    }
  })
);

const MauiDescription =
  'Este Poncho invoca la Flora de la mitica Maui, en Hawaii';

const TicoDescription = 'Este Poncho esta inspirado en Santa Teresa Costa Rica';

const MayaDescription = 'Poncho que proviene de la rivera Maya en Mexico';

const TikiDescription = 'Poncho polinesico';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Item
            ponchoColor="Negro"
            ponchoName="Poncho Maui"
            ponchoDescription={MauiDescription}
            ponchoPrice={1700}
            ponchoImage={mauiImage}
            ponchoSize="Large"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="#fc7272"
            ponchoName="Poncho Tico"
            ponchoDescription={TicoDescription}
            ponchoPrice={1700}
            ponchoImage={ticoImage}
            ponchoSize="Large"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="Negro"
            ponchoName="Poncho Maya"
            ponchoDescription={MayaDescription}
            ponchoPrice={1700}
            ponchoImage={mayaImage}
            ponchoSize="Large"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="#f78923"
            ponchoName="Poncho Tiki"
            ponchoDescription={TikiDescription}
            ponchoPrice={1700}
            ponchoImage={tikiImage}
            ponchoSize="Large"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

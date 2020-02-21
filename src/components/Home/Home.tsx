import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Item from '../Item/Item';

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
const mauiImage = '../../../public/assets/maui.jpeg';
const ticoImage = '../../../public/assets/tico.jpeg';
const mayaImage = '../../../public/assets/maya.jpeg';
const tikiImage = '../../../public/assets/tiki.jpeg';

const MauiDescription =
  'Este Poncho invoca la Flora de la mitica Maui, en Hawaii';

const TicoDescription = 'Este Poncho esta inspirado en Santa Teresa Costa Rica';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Item
            ponchoColor="Azul"
            ponchoName="Poncho Maui"
            ponchoDescription={MauiDescription}
            ponchoPrice={1700}
            ponchoImage={mauiImage}
            ponchoSize="L"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="Negro"
            ponchoName="Poncho Tico"
            ponchoDescription={TicoDescription}
            ponchoPrice={1700}
            ponchoImage={ticoImage}
            ponchoSize="L"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="Negro"
            ponchoName="Poncho Maya"
            ponchoDescription={TicoDescription}
            ponchoPrice={1700}
            ponchoImage={mayaImage}
            ponchoSize="L"
          />
        </Grid>
        <Grid item>
          <Item
            ponchoColor="Negro"
            ponchoName="Poncho Tiki"
            ponchoDescription={TicoDescription}
            ponchoPrice={1700}
            ponchoImage={tikiImage}
            ponchoSize="L"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

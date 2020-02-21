import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Link, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      margin: 40
    }
  })
);
const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Link href="https://www.instagram.com/ponchetoba" target="_blank">
          <Button>
            <InstagramIcon />
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default Footer;

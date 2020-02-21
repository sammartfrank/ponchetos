import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Link, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1
    }
  })
);
const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Link href="https:instagram.com/ponchetoba">
          <Button>
            <InstagramIcon />
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default Footer;

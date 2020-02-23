import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Link, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
        <Link
          href="https://www.facebook.com/ponchetoba-312519436326009/"
          target="_blank"
        >
          <Button>
            <FacebookIcon />
          </Button>
        </Link>
        <Link
          href="https://www.facebook.com/ponchetoba-312519436326009/"
          target="_blank"
        >
          <Button>
            <WhatsAppIcon />
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default Footer;

import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Link,
  Button,
  Drawer,
  List,
  ListItemIcon,
  ListItem,
  ListItemText
} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(40)
    },
    sideMenu: {
      background: 'rgba(100,100,100,0.6)'
    }
  })
);

interface Props {
  toggleDrawer: () => void;
  open: boolean;
}

const SideMenu: FC<Props> = ({ toggleDrawer, open }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      className={classes.sideMenu}
    >
      <div className={classes.root}>
        <List component="nav" aria-label="social icons">
          <Link
            href="https://www.instagram.com/ponchetoba"
            target="_blank"
            underline="none"
          >
            <ListItem button>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
          </Link>
          <Link
            href="https://www.facebook.com/ponchetoba-312519436326009/"
            target="_blank"
            underline="none"
          >
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
};

export default SideMenu;

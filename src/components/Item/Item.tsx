import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    margin: 10
  },
  media: {
    height: 200
  }
});

interface Props {
  ponchoName: string;
  ponchoPrice: number;
  ponchoDescription: string;
  ponchoImage?: string;
  ponchoSize: string;
  ponchoColor: string;
}
const Item: FC<Props> = ({
  ponchoName,
  ponchoImage,
  ponchoDescription,
  ponchoPrice,
  ponchoSize,
  ponchoColor
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ponchoImage}
          title={ponchoName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ponchoName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ponchoDescription}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="h5">
            $ {ponchoPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar
        </Button>
        <Button size="small" color="primary">
          Consultar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 20
  },
  media: {
    height: 200
  },
  content: {
    marginBottom: 20
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
  const [size, setSize] = useState(ponchoSize);
  const [price, setPrice] = useState(ponchoPrice);
  const [color, setColor] = useState(ponchoColor);

  useEffect(() => {
    switch (size) {
      case 'Small':
        return setPrice(1200);
      case 'Medium':
        return setPrice(1500);
      default:
        setPrice(1700);
    }
  }, [size]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string);
  };

  const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as string);
  };

  const handleReset = () => setColor(ponchoColor);

  return (
    <Card
      className={classes.root}
      style={{ borderColor: `1px solid ${color}` }}
    >
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
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {ponchoDescription}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="h3">
            $ {price}
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
        <InputLabel id="select-label">Tamaño:</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={size}
          onChange={handleChange}
        >
          <MenuItem value="Small">Small</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Large">Large</MenuItem>
        </Select>
        <InputLabel id="select-label">Color:</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={color}
          placeholder="color"
          onChange={handleColor}
        >
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Azul">Azul</MenuItem>
          <MenuItem value="Bordo">Bordo</MenuItem>
          <MenuItem value="Amarillo">Amarillo</MenuItem>
          <MenuItem value="Naranja">Naranja</MenuItem>
        </Select>
      </CardActions>
    </Card>
  );
};

export default Item;

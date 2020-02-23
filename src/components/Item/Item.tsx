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

export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}
export enum Color {
  AMARILLO,
  FUCSIA,
  VIOLETA,
  VERDEFLUOR,
  AZULMARINO,
  NEGRO,
  CELESTE,
  BORDO,
  ROJO,
  NARANJA
}
interface Props {
  ponchoName: string;
  ponchoPrice: number;
  ponchoDescription: string;
  ponchoImage?: string;
  ponchoSize: Size;
  ponchoColor: Color;
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
      case Size.SMALL:
        return setPrice(1200);
      case Size.MEDIUM:
        return setPrice(1500);
      default:
        setPrice(1700);
    }
  }, [size]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as Size);
  };

  const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as Color);
  };

  const handleReset = () => setColor(ponchoColor);

  console.log('rendering');

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
          <MenuItem value={Size.SMALL}>Small</MenuItem>
          <MenuItem value={Size.MEDIUM}>Medium</MenuItem>
          <MenuItem value={Size.LARGE}>Large</MenuItem>
        </Select>
        <InputLabel id="select-label">Color:</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={color}
          placeholder="color"
          onChange={handleColor}
        >
          <MenuItem value={Color.NEGRO}>Negro</MenuItem>
          <MenuItem value={Color.AZULMARINO}>Azul</MenuItem>
          <MenuItem value={Color.BORDO}>Bordo</MenuItem>
          <MenuItem value={Color.AMARILLO}>Amarillo</MenuItem>
          <MenuItem value={Color.NARANJA}>Naranja</MenuItem>
          <MenuItem value={Color.CELESTE}>Celeste</MenuItem>
          <MenuItem value={Color.FUCSIA}>Fucsia</MenuItem>
          <MenuItem value={Color.VERDEFLUOR}>Verde</MenuItem>
          <MenuItem value={Color.ROJO}>Rojo</MenuItem>
        </Select>
      </CardActions>
    </Card>
  );
};

export default Item;

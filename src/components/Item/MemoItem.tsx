import React, { FC, memo, useState, useEffect, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
  CardMedia
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import cartContext from '../../providers/cartContext';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 600,
      marginBottom: theme.spacing(25)
    },
    media: {
      height: theme.spacing(40)
    },
    action: {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  })
);

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
  NARANJA,
  map
}

interface Props {
  ponchoName?: string;
  ponchoPrice?: number;
  ponchoColor?: Color;
  ponchoSize?: Size;
  ponchoImage?: string;
  ponchoDescription?: string;
}

const MemoItem: FC<Props> = memo(
  ({
    ponchoName = 'Nombre del Poncho',
    ponchoPrice = 0,
    ponchoImage = '',
    ponchoSize = Size.LARGE,
    ponchoDescription = 'Insert Description',
    ponchoColor = Color.NEGRO
  }) => {
    const classes = useStyles();
    const { addNew } = useContext(cartContext);
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

    // const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
    //   setColor(event.target.value as Color);
    // };
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSize(event.target.value as Size);
    };
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Adding an Item');
      const mockProduct = {
        id: uuidv4(),
        name: 'ponchoName',
        count: 1
      };
      if (addNew) {
        addNew(mockProduct);
      }
    };
    const handleModal = () => console.log('Consulta, Modal');
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            image={ponchoImage}
            title={ponchoName}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {ponchoName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {ponchoDescription}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" component="h3">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" color="primary" onClick={handleOnClick}>
            Agregar
          </Button>
          <Button size="small" color="primary" onClick={handleModal}>
            Consultar
          </Button>
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
          {/* <Select
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
          </Select> */}
        </CardActions>
      </Card>
    );
  }
);

export default MemoItem;

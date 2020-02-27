import React, { FC, memo, useState, useEffect, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Select,
  MenuItem,
  CardMedia
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import cartContext from '../../providers/cartContext';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: theme.spacing(15)
    },
    media: {
      height: theme.spacing(40)
    },
    action: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    tick: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: theme.spacing(2)
    }
  })
);

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}
export enum Color {
  AMARILLO = 'AMARILLO',
  FUCSIA = 'FUCSIA',
  VIOLETA = 'VIOLETA',
  VERDEFLUOR = 'VERDEFLUOR',
  AZULMARINO = 'AZULMARINO',
  NEGRO = 'NEGRO',
  CELESTE = 'CELESTE',
  BORDO = 'BORDO',
  ROJO = 'ROJO',
  NARANJA = 'NARANJA'
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
    const { addNew, cart } = useContext(cartContext);
    const [size, setSize] = useState(ponchoSize);
    const [price, setPrice] = useState(ponchoPrice);
    const [color, setColor] = useState(ponchoColor);
    const [quantity, setQuantity] = useState(0);
    const [shopped, setShopped] = useState(false);
    const [checked, setChecked] = useState(false);

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

    const handleColor = (event: React.ChangeEvent<{ value: unknown }>) => {
      setColor(event.target.value as Color);
    };
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSize(event.target.value as Size);
    };

    const handleQtyAdd = () => {
      setQuantity(quantity + 1);
      setShopped(true);
    };
    const handleQtyDec = () => {
      if (quantity === 0) return;
      return setQuantity(quantity - 1);
    };

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      let product = {
        id: uuidv4(),
        name: ponchoName,
        size: size,
        color: color,
        count: quantity,
        price: price * quantity
      };
      if (addNew) {
        addNew(product);
        setShopped(true);
        setChecked(true);
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
          {shopped ? (
            <div className={classes.tick}>
              <Button color="primary">
                <AddIcon onClick={handleQtyAdd} />
              </Button>
              <span>{quantity}</span>
              <Button
                color="primary"
                onClick={handleQtyDec}
                disabled={quantity === 0}
              >
                <RemoveIcon />
              </Button>
              <Button onClick={handleOnClick} disabled={quantity === 0}>
                {checked ? (
                  <CheckCircleOutlineIcon color="action" />
                ) : (
                  <CheckIcon color={quantity === 0 ? 'disabled' : 'primary'} />
                )}
              </Button>
            </div>
          ) : (
            <Button size="small" color="primary" onClick={handleQtyAdd}>
              Comprar
            </Button>
          )}

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
  }
);

export default MemoItem;

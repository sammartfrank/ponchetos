import { Size, Color } from '../Item/MemoItem';

import { v4 as uuidv4 } from 'uuid';

export const ponchos = [
  {
    name: 'Maui',
    count: 1,
    id: uuidv4(),
    size: Size.LARGE,
    color: Color.FUCSIA,
    // url: mauiImage,
    price: 1700
  },
  {
    name: 'Tiki',
    count: 1,
    id: uuidv4(),
    size: Size.MEDIUM,
    color: Color.ROJO,
    // url: mauiImage,
    price: 1500
  },
  {
    name: 'Maya',
    count: 1,
    id: uuidv4(),
    size: Size.LARGE,
    color: Color.BORDO,
    // url: mauiImage,
    price: 1700
  },
  {
    name: 'Tico',
    count: 1,
    id: uuidv4(),
    size: Size.LARGE,
    color: Color.FUCSIA,
    // url: mauiImage,
    price: 1700
  }
];

import React, { createContext } from 'react';

type ItemType = {
  count: number;
  id: string;
  name: string;
};

interface IState {
  cart: ItemType[];
  cartCount: number;
  addNew?: (product: ItemType) => void;
  removePd?: (index: number) => void;
}

const initialState: IState = {
  cart: [],
  cartCount: 0
};

const cartContext = createContext(initialState);

export default cartContext;

// import mauiImage from '../assets/maui.jpeg';
// import ticoImage from '../assets/tico.jpeg';
// import mayaImage from '../assets/maya.jpeg';
// import tikiImage from '../assets/tiki.jpeg';

// export enum Size {
//   SMALL,
//   MEDIUM,
//   LARGE
// }
// export enum Color {
//   AMARILLO,
//   FUCSIA,
//   VIOLETA,
//   VERDEFLUOR,
//   AZULMARINO,
//   NEGRO,
//   CELESTE,
//   BORDO,
//   ROJO,
//   NARANJA
// }

// export const CartProvider = createContext({
//   products: {
//     ponchos: [
//       {
//         name: 'Maui',
//         size: Size.LARGE,
//         color: Color.NEGRO,
//         price: 1700,
//         desc: 'Poncho Hawaiiano',
//         url: mauiImage
//       },
//       {
//         name: 'Tico',
//         size: Size.MEDIUM,
//         color: Color.AMARILLO,
//         price: 1500,
//         desc: 'Poncho de Costa Rica',
//         url: ticoImage
//       },
//       {
//         name: 'Maya',
//         size: Size.SMALL,
//         color: Color.AMARILLO,
//         price: 1200,
//         desc: 'Poncho Mexicano',
//         url: mayaImage
//       },
//       {
//         name: 'Tiki',
//         size: Size.LARGE,
//         color: Color.AZULMARINO,
//         price: 1700,
//         desc: 'Poncho Polinesico',
//         url: tikiImage
//       }
//     ],
//     gorras: [
//       {
//         gorraName: 'Gorriaran Merlo',
//         gorraPrice: 340,
//         gorraDescription: 'Gorra la gente de Merlo'
//       }
//     ]
//   },
//   items: []
// });

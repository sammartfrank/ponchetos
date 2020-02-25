import React, { createContext } from 'react';
import { Color, Size } from '../components/Item/MemoItem';

export type Item = {
  count: number;
  id: string;
  name: string;
  color: Color;
  size: Size;
  url?: string;
  price: number;
};

interface IState {
  cart: Item[];
  cartCount: number;
  addNew?: (product: any) => void;
  removePd?: (index: number) => void;
  getSubTotal?: () => void;
  subtotal?: number;
}

const initialState: IState = {
  cart: [],
  cartCount: 0
};

const cartContext = createContext(initialState);

export default cartContext;

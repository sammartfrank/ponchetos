import React, { useState, useEffect, FC } from 'react';

import cartContext, { Item } from '../providers/cartContext';

interface IState {
  cart: Item[];
  cartCount: number;
  addNew: (product: Item) => void;
  removePd: (index: number) => void;
  getSubtotal: () => void;
  subtotal: number;
}

const Store: FC = ({ children }) => {
  const initialState: IState = {
    cart: [],
    cartCount: 0,
    addNew: addNew,
    removePd: removePd,
    getSubtotal: getSubtotal,
    subtotal: 0
  };

  const [appstate, setState] = useState(initialState);

  function addNew(product: Item) {
    let newList = appstate.cart;
    const newItem = {
      count: product.count,
      id: product.id,
      name: product.name,
      color: product.color,
      size: product.size,
      url: product.url,
      price: product.price
    };
    const filtered = newList.filter(i => {
      return i.id === product.id;
    });

    if (filtered.length > 0) {
      const pos = newList
        .map(i => {
          return i.id;
        })
        .indexOf(product.id);
      newList[pos].count += 1;
    } else {
      newList.push(newItem);
    }

    setState({
      ...appstate,
      cart: newList,
      cartCount: getCartCount(),
      subtotal: getSubtotal()
    });
  }

  function removePd(index: number) {
    const cartList = appstate.cart;
    cartList.splice(index, 1);
    setState({
      ...appstate,
      cart: cartList,
      cartCount: getCartCount(),
      subtotal: getSubtotal()
    });
  }

  function getCartCount() {
    let countTally = 0;
    if (appstate.cart.length > 0) {
      appstate.cart.forEach(item => {
        countTally += item.count;
      });
    }

    return countTally;
  }

  function getSubtotal() {
    let count = 0;
    if (appstate.cart.length > 0) {
      appstate.cart.forEach(item => {
        count += item.price;
      });
    }
    return count;
  }

  return (
    <cartContext.Provider value={appstate}>{children}</cartContext.Provider>
  );
};
export default Store;

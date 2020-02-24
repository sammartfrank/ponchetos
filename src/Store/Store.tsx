import React, { useState, useEffect, FC } from 'react';

import cartContext from '../providers/cartContext';

type ItemType = {
  count: number;
  id: string;
  name: string;
};

interface IState {
  cart: ItemType[];
  cartCount: number;
  addNew: (product: ItemType) => void;
  removePd: (index: number) => void;
}

const Store: FC = ({ children }) => {
  const initialState: IState = {
    cart: [],
    cartCount: 0,
    addNew: addNew,
    removePd: removePd
  };

  const [appstate, setState] = useState(initialState);

  function addNew(product: ItemType) {
    let newList = appstate.cart;
    const newItem = {
      count: 1,
      id: product.id,
      name: product.name
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

    setState({ ...appstate, cart: newList, cartCount: getCartCount() });
  }

  function removePd(index: number) {
    const cartList = appstate.cart;
    cartList.splice(index, 1);
    setState({ ...appstate, cart: cartList, cartCount: getCartCount() });
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

  return (
    <cartContext.Provider value={appstate}>{children}</cartContext.Provider>
  );
};
export default Store;

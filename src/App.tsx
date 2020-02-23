import React, { FC, useState, useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';

import Home from './components/Home/Home';
import Carting from './components/Drawer/Cart';
import Appbar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import { CartProvider } from './providers/CartProvider';

const App: FC = () => {
  const Cart = useContext(CartProvider);

  const [state, setState] = useState(false);

  const handleOnToggle = () => setState(!state);
  return (
    <Container maxWidth="md">
      <CartProvider.Provider value={Cart}>
        <Carting open={state} toggleDrawer={handleOnToggle} />
        <Appbar appName="Ponchetos" handleToggle={handleOnToggle} />
        <Home />
      </CartProvider.Provider>
      <Footer />
    </Container>
  );
};
export default App;

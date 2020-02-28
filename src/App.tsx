import React, { FC, useState } from 'react';
import { CssBaseline } from '@material-ui/core';

import Home from './components/Home/Home';
import Carting from './components/Drawer/Cart';
import SideMenu from './components/SideMenu/SideMenu';
import Appbar from './components/AppBar/AppBar';
import Hero from './components/Hero/Hero';

const App: FC = () => {
  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleToggleCart = () => setCart(!cart);
  const handleToggleMenu = () => setMenu(!menu);
  return (
    <div>
      <CssBaseline />
      <Appbar
        appName="Ponchetos"
        handleToggleCart={handleToggleCart}
        handleToggleMenu={handleToggleMenu}
      />
      <Carting open={cart} toggleDrawer={handleToggleCart} />
      <SideMenu toggleDrawer={handleToggleMenu} open={menu} />
      <Hero />
      <Home />
    </div>
  );
};
export default App;

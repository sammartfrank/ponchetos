import React, { FC, useState } from 'react';
import { CssBaseline } from '@material-ui/core';

import Home from './components/Home/Home';
import Carting from './components/Drawer/Cart';
import Appbar from './components/AppBar/AppBar';
import Hero from './components/Hero/Hero';

const App: FC = () => {
  const [state, setState] = useState(false);
  const handleOnToggle = () => setState(!state);
  return (
    <div>
      <CssBaseline />
      <Appbar appName="Ponchetos" handleToggle={handleOnToggle} />
      <Carting open={state} toggleDrawer={handleOnToggle} />
      <Hero />
      <Home />
    </div>
  );
};
export default App;

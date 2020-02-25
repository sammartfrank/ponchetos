import React, { FC, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      <Container maxWidth="md">
        <Home />
      </Container>
    </div>
  );
};
export default App;

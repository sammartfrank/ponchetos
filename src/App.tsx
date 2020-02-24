import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';

import Home from './components/Home/Home';
import Carting from './components/Drawer/Cart';
import Appbar from './components/AppBar/AppBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  const [state, setState] = useState(false);

  const handleOnToggle = () => setState(!state);
  return (
    <Container maxWidth="md">
      <Carting open={state} toggleDrawer={handleOnToggle} />
      <Appbar appName="Ponchetos" handleToggle={handleOnToggle} />
      <Hero />
      <Home />
      <Footer />
    </Container>
  );
};
export default App;

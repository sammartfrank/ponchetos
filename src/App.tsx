import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Home from './components/Home/Home';
import Appbar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import Muebles from './components/Muebles/Muebles';

const App: FC = () => {
  const [state, setState] = useState(true);
  const handleChange = (): void => {
    setState(!state);
  };
  return (
    <Container maxWidth="lg">
      <Appbar
        checked={state}
        appName={state ? 'Ponchetos' : 'Camila Quilez Muebles'}
        handleChange={handleChange}
      />
      {state ? <Home /> : <Muebles />}
      <Footer />
    </Container>
  );
};
export default App;

import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';

import Home from './components/Home/Home';
import Appbar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  const [state, setState] = useState(true);
  const handleChange = (): void => {
    setState(!state);
  };
  return (
    <Container maxWidth="lg">
      <Appbar
        checked={state}
        appName={state ? 'Ponchetos' : 'Camila Quilez'}
        handleChange={handleChange}
      />
      <Home />
      <Footer />
    </Container>
  );
};
export default App;

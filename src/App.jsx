import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Home from './Pages/Home/Home';

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  </BrowserRouter>
);
export default App;

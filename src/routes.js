// Importe as dependências necessárias
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Orders from './containers/Orders';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pedidos' component={Orders} />
      </Switch>
    </Router>
  );
};

export default Routes;

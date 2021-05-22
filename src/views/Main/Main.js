import React from 'react';
import Home from '../Home/Home';
import Account from '../Account/Account';
import { Switch, Route } from 'react-router-dom';

export default function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastrar_cliente" component={Account} />
    </Switch>
  );
}

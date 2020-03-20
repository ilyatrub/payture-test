import React from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Payments from './containers/Payments/Payments';
import NewPayment from './containers/Payments/NewPayment/NewPayment';
import HomePage from './containers/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/payments/new' component={NewPayment} />
          <Route path='/payments' component={Payments} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

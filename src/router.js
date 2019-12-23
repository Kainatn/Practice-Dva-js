import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CounterApp from './components/CounterApp';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
    
        <Route path="/" component={CounterApp} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

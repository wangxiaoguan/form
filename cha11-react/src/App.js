import React, { Component } from 'react';
import './index.less';
import Router from './routers/routes';
import {HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
class App extends Component {
  render() {
    const history = createHashHistory();
    return (  
          <HashRouter basename="/" history={history}>
                 <Router />
          </HashRouter>
    );
  }
}
export default App;
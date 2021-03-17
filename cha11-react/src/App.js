import React, { Component } from 'react';
import './index.less';
import Routers from './routers/routes';
import {Router} from 'react-router-dom';
import { createHashHistory } from 'history';
class App extends Component {
  render() {
    const history = createHashHistory();
    return (  
          <Router basename="/" history={history}>
                 <Routers />
          </Router>
    );
  }
}
export default App;
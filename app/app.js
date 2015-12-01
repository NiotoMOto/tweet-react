'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Home from './containers/Home';
import User from './containers/User';
import { Router, Route, Link } from 'react-router'

const mountNode = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Route path="/" component={Home}>
      <Route path="user" component={User}></Route>
    </Route>
  </Router>,
  mountNode
);
